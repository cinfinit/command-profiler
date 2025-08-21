import inquirer from 'inquirer';
import fs from 'fs';
import { getConfigPath, ensureConfig } from '../bin/utils/scopeResolver.js';

export async function createProfile(name, options) {
  const configPath = getConfigPath(options.global);
  ensureConfig(configPath);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  if (config.profiles[name]) {
    console.log(`❗ Profile "${name}" already exists.`);
    return;
  }

  const commands = [];
  while (true) {
    const { cmd } = await inquirer.prompt({
      type: 'input',
      name: 'cmd',
      message: 'Add command (leave empty to finish):'
    });

    if (!cmd) break;
    commands.push(cmd);
  }

  config.profiles[name] = commands;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`✅ Profile "${name}" created.`);
}
