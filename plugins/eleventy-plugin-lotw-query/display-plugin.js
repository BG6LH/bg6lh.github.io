import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { PLUGIN_CONFIG } from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Load DXCC statistics data
 */
function loadDXCCData() {
  try {
    const jsonPath = PLUGIN_CONFIG.getDataPath(PLUGIN_CONFIG.PATHS.LOTW_DXCC_JSON);
    if (fs.existsSync(jsonPath)) {
      const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      return data;
    } else {
      console.warn('[lotw-display] DXCC JSON file does not exist');
      return { confirmed_dxcc_count: 0, confirmed_dxcc_entities: [], error: 'JSON file does not exist' };
    }
  } catch (error) {
    console.error('[lotw-display] Failed to load DXCC data:', error.message);
    return { confirmed_dxcc_count: 0, confirmed_dxcc_entities: [], error: error.message };
  }
}

/**
 * Format update time
 */
function formatUpdateTime(isoString) {
  if (!isoString) return 'N/A';
  try {
    return new Date(isoString).toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return 'N/A';
  }
}

/**
 * LoTW Display Plugin (display only, no data updates)
 */
export default function lotwDisplayPlugin(eleventyConfig, options = {}) {
  // Add global data: load parsed DXCC statistics data
  eleventyConfig.addGlobalData("lotwConfirmedDXCC", loadDXCCData);

  // Shortcode: display confirmed DXCC statistics
  eleventyConfig.addShortcode("lotwConfirmedDXCC", function () {
    const data = this.ctx.lotwConfirmedDXCC;
    
    if (!data || data.error) {
      return `<div class="lotw-error"><p>Unable to load confirmed DXCC data${data?.error ? ': ' + data.error : ''}.</p></div>`;
    }

    if (data.confirmed_dxcc_count === 0) {
      return '<div class="lotw-no-data"><p>No confirmed DXCC entity records available.</p></div>';
    }

    return `
      <div class="lotw-confirmed-dxcc-result">
        <h3>Confirmed DXCC Statistics</h3>
        <div class="dxcc-summary">
          <p>Total confirmed DXCC entities: <strong>${data.confirmed_dxcc_count}</strong></p>
          <p>Total confirmed QSOs: <strong>${data.total_confirmed_qsos || 'N/A'}</strong></p>
          <p>Last updated: ${formatUpdateTime(data.last_updated)}</p>
        </div>
        <details class="dxcc-details">
          <summary>View detailed list (${data.confirmed_dxcc_entities?.length || 0} entities)</summary>
          <div class="dxcc-list">
            ${data.dxcc_details ? data.dxcc_details.map(entity => `
              <div class="dxcc-entity">
                <span class="dxcc-number">${entity.dxcc}</span>
                <span class="dxcc-country">${entity.country}</span>
                ${entity.sample_call ? `<span class="dxcc-call">${entity.sample_call}</span>` : ''}
                ${entity.sample_band ? `<span class="dxcc-band">${entity.sample_band}</span>` : ''}
                ${entity.sample_mode ? `<span class="dxcc-mode">${entity.sample_mode}</span>` : ''}
              </div>
            `).join('') : `
              <div class="dxcc-numbers">
                ${data.confirmed_dxcc_entities.map(num => `<span class="dxcc-number">${num}</span>`).join(', ')}
              </div>
            `}
          </div>
        </details>
      </div>
    `;
  });

  // Shortcode: display count only
  eleventyConfig.addShortcode("lotwDXCCCount", function () {
    const data = this.ctx.lotwConfirmedDXCC;
    return data?.confirmed_dxcc_count || 0;
  });

  // Shortcode: display progress bar
  eleventyConfig.addShortcode("lotwDXCCProgress", function (target = 100) {
    const data = this.ctx.lotwConfirmedDXCC;
    const count = data?.confirmed_dxcc_count || 0;
    const percentage = Math.min((count / target) * 100, 100);
    
    return `
      <div class="dxcc-progress">
        <div class="progress-info">
          <span>DXCC Progress</span>
          <span>${count} / ${target}</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
        <div class="progress-text">${percentage.toFixed(1)}%</div>
      </div>
    `;
  });

  // Shortcode: display update status
  eleventyConfig.addShortcode("lotwUpdateStatus", function () {
    const data = this.ctx.lotwConfirmedDXCC;
    if (!data || data.error) {
      return '<span class="lotw-status error">Data loading failed</span>';
    }
    
    const updateTime = formatUpdateTime(data.last_updated);
    return `<span class="lotw-status ok" title="Last updated: ${updateTime}">Data synchronized</span>`;
  });
}