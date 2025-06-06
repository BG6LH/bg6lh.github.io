import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Plugin configuration - centralized path management
export const PLUGIN_CONFIG = {
  // Relative path to _data directory from plugin directory
  DATA_DIR_PATH: '../../_data',
  
  // Helper function to get absolute path to _data directory
  getDataPath: (filename = '') => {
    return path.resolve(__dirname, PLUGIN_CONFIG.DATA_DIR_PATH, filename);
  },
  
  // Predefined file paths
  PATHS: {
    LOTW_DXCC_JSON: 'lotwDxcc.json',
    LOTW_QSO_ADIF: 'lotwQso.adif'
  }
};

// Export functions from update-lotw-data.js
export { 
  updateLoTWData, 
  fetchADIFData, 
  saveADIFData, 
  parseADIFToJSON 
} from './update-lotw-data.js';

// Export display plugin
export { default as lotwDisplayPlugin } from './display-plugin.js';

// For backward compatibility, keep original function exports
export { 
  fetchADIFData as queryDXCC,  // Renamed for compatibility
  parseADIFToJSON as parseConfirmedDXCCFromADIF  // Renamed for compatibility
} from './update-lotw-data.js';

// Default export display plugin (standard practice for Eleventy plugins)
export { default } from './display-plugin.js';


