import fs from 'fs';
import path from 'path';
import os from 'os';

const findProjectConfig = (cwd) => {
  let dir = cwd;
  while (dir !== path.parse(dir).root) {
    const configPath = path.join(dir, 'cmdprofiler', 'config.json');
    if (fs.existsSync(configPath)) return configPath;
    dir = path.dirname(dir);
  }
  return null;
};

export const getConfigPath = (isGlobal) => {
  if (isGlobal) return path.join(os.homedir(), 'cmdprofiler', 'config.json');
  const projectPath = findProjectConfig(process.cwd());
  return projectPath || path.join(os.homedir(), 'cmdprofiler', 'config.json');
};

export const ensureConfig = (configPath) => {
  const dir = path.dirname(configPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify({ profiles: {} }, null, 2));
  } else {
    // Validate and patch if needed
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (typeof config !== 'object' || !config.profiles) {
        console.log('⚠️ Fixing invalid config structure...');
        fs.writeFileSync(configPath, JSON.stringify({ profiles: {} }, null, 2));
      }
    } catch {
      console.log('⚠️ Invalid JSON. Replacing with default config.');
      fs.writeFileSync(configPath, JSON.stringify({ profiles: {} }, null, 2));
    }
  }
};
