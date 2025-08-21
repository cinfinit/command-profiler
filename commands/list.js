import fs from 'fs';
import { getConfigPath, ensureConfig } from '../bin/utils/scopeResolver.js';

export function listProfiles(options) {
  const configPath = getConfigPath(options.global);
  ensureConfig(configPath);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  const profileNames = Object.keys(config.profiles);
  if (profileNames.length === 0) {
    console.log('No profiles found.');
    return;
  }

  console.log('📂 Available Profiles:');
  profileNames.forEach((name) => {
    console.log(`- ${name}`);
  });
}
