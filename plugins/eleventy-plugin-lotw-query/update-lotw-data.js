import { fileURLToPath } from 'url';
import path from 'path';
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';
import { PLUGIN_CONFIG } from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

/**
 * Fetch ADIF data from LoTW
 */
export async function fetchADIFData({ username, password }) {
  if (!username || !password) {
    throw new Error('LoTW username and password cannot be empty');
  }

  const url = `https://lotw.arrl.org/lotwuser/lotwreport.adi`;

  try {
    console.log('[lotw-update] Starting to fetch data from LoTW...');
    const response = await axios.get(url, {
      params: {
        login: username,
        password: password,
        qso_query: '1',
        qso_qsl: 'yes',
        qso_qslsince: '2018-01-01',
        qso_qsldetail: 'yes',
        qso_mydetail: 'yes',
      },
      headers: {
        'User-Agent': 'lotw-query-core/0.1',
        'Accept': 'text/plain',
      },
      timeout: 30000, // 30 seconds timeout
    });
    
    console.log('[lotw-update] Data fetched successfully');
    return response.data;
  } catch (error) {
    throw new Error(`LoTW query failed: ${error.message}`);
  }
}

/**
 * Save ADIF data to file
 */
export function saveADIFData(adifData, outputPath = null) {
  const adifPath = outputPath || PLUGIN_CONFIG.getDataPath(PLUGIN_CONFIG.PATHS.LOTW_QSO_ADIF);
  
  // Create backup
  if (fs.existsSync(adifPath)) {
    // Delete old backup files
    const dataDir = path.dirname(adifPath);
    const backupPattern = /^lotwQso_\d+\.bak\.adif$/;
    
    try {
      const files = fs.readdirSync(dataDir);
      const oldBackups = files.filter(file => backupPattern.test(file));
      
      // Delete all old backup files
      oldBackups.forEach(backup => {
        const oldBackupPath = path.join(dataDir, backup);
        fs.unlinkSync(oldBackupPath);
        console.log(`[lotw-update] Deleted old backup file: ${oldBackupPath}`);
      });
    } catch (error) {
      console.warn(`[lotw-update] Error cleaning old backup files: ${error.message}`);
    }
    
    // Create new backup
    const backupPath = PLUGIN_CONFIG.getDataPath(`lotwQso_${Date.now()}.bak.adif`);
    fs.copyFileSync(adifPath, backupPath);
    console.log(`[lotw-update] Original file backed up to: ${backupPath}`);
  }
  
  fs.writeFileSync(adifPath, adifData, 'utf8');
  console.log(`[lotw-update] ADIF data saved to: ${adifPath}`);
  return adifPath;
}

/**
 * Parse ADIF file and generate JSON statistics
 */
export function parseADIFToJSON(adifFilePath = null) {
  try {
    const filePath = adifFilePath || PLUGIN_CONFIG.getDataPath(PLUGIN_CONFIG.PATHS.LOTW_QSO_ADIF);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`ADIF file does not exist: ${filePath}`);
    }
    
    console.log(`[lotw-update] Starting to parse ADIF file: ${filePath}`);
    const adifText = fs.readFileSync(filePath, 'utf8');
    
    const records = adifText.split(/<eor>/i);
    const dxccSet = new Set();
    const dxccDetails = [];
    let processedRecords = 0;
    
    for (const record of records) {
      if (!record.trim() || !record.includes('<QSL_RCVD:')) {
        continue;
      }
      
      processedRecords++;
      
      // Check if it's a confirmed QSL record
      const qslMatch = record.match(/<QSL_RCVD:\d+>([YN])/i);
      if (!qslMatch || qslMatch[1].toUpperCase() !== 'Y') {
        continue;
      }
      
      // Extract DXCC number
      const dxccMatch = record.match(/<DXCC:(\d+)>(\d+)/i);
      if (dxccMatch) {
        const dxccNumber = Number(dxccMatch[2]);
        dxccSet.add(dxccNumber);
        
        // Extract detailed information
        const countryMatch = record.match(/<COUNTRY:(\d+)>([^<]+)/i);
        const callMatch = record.match(/<CALL:(\d+)>([^<]+)/i);
        const dateMatch = record.match(/<QSO_DATE:(\d+)>(\d+)/i);
        const bandMatch = record.match(/<BAND:(\d+)>([^<]+)/i);
        const modeMatch = record.match(/<MODE:(\d+)>([^<]+)/i);
        
        if (!dxccDetails.find(d => d.dxcc === dxccNumber)) {
          dxccDetails.push({
            dxcc: dxccNumber,
            country: countryMatch ? countryMatch[2].trim() : 'Unknown',
            sample_call: callMatch ? callMatch[2].trim() : '',
            sample_date: dateMatch ? dateMatch[2] : '',
            sample_band: bandMatch ? bandMatch[2].trim() : '',
            sample_mode: modeMatch ? modeMatch[2].trim() : ''
          });
        }
      }
    }
    
    const result = {
      confirmed_dxcc_count: dxccSet.size,
      confirmed_dxcc_entities: Array.from(dxccSet).sort((a, b) => a - b),
      dxcc_details: dxccDetails.sort((a, b) => a.dxcc - b.dxcc),
      last_updated: new Date().toISOString(),
      total_records_processed: processedRecords,
      total_confirmed_qsos: records.filter(r => r.includes('<QSL_RCVD:') && r.match(/<QSL_RCVD:\d+>Y/i)).length
    };
    
    // Save JSON file
    const jsonPath = PLUGIN_CONFIG.getDataPath(PLUGIN_CONFIG.PATHS.LOTW_DXCC_JSON);
    fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), 'utf8');
    
    console.log(`[lotw-update] Parsing completed: Found ${result.confirmed_dxcc_count} confirmed DXCC entities`);
    console.log(`[lotw-update] Statistics saved to: ${jsonPath}`);
    
    return result;
  } catch (error) {
    console.error('[lotw-update] Error parsing ADIF file:', error.message);
    throw error;
  }
}

/**
 * Complete data update workflow
 */
export async function updateLoTWData(options = {}) {
  const {
    username = process.env.LOTW_USERNAME,
    password = process.env.LOTW_PASSWORD,
    skipFetch = false,
    adifPath = null,
    force = false
  } = options;

  try {
    console.log('[lotw-update] Starting LoTW data update workflow...');
    
    let adifFilePath = adifPath || PLUGIN_CONFIG.getDataPath(PLUGIN_CONFIG.PATHS.LOTW_QSO_ADIF);
    
    // Check if new data needs to be fetched
    if (!skipFetch) {
      if (!username || !password) {
        throw new Error('LoTW username and password are required');
      }
      
      // Check if file exists and needs updating
      if (!force && fs.existsSync(adifFilePath)) {
        const stats = fs.statSync(adifFilePath);
        const ageHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        
        if (ageHours < 1) { // Don't update within 1 hour
          console.log('[lotw-update] ADIF file is recent, skipping update');
        } else {
          const adifData = await fetchADIFData({ username, password });
          adifFilePath = saveADIFData(adifData, adifFilePath);
        }
      } else {
        const adifData = await fetchADIFData({ username, password });
        adifFilePath = saveADIFData(adifData, adifFilePath);
      }
    }
    
    // Parse data
    const result = parseADIFToJSON(adifFilePath);
    
    console.log('[lotw-update] Data update completed!');
    return result;
    
  } catch (error) {
    console.error('[lotw-update] Data update failed:', error.message);
    throw error;
  }
}

// If running this script directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const skipFetch = args.includes('--skip-fetch');
  
  updateLoTWData({ force, skipFetch })
    .then(result => {
      console.log('✅ Update successful:', result.confirmed_dxcc_count, 'DXCC entities');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Update failed:', error.message);
      process.exit(1);
    });
}