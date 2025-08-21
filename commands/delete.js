import fs from 'fs';
import inquirer from 'inquirer';
import { getConfigPath, ensureConfig } from '../bin/utils/scopeResolver.js';
import chalk from 'chalk';

export async function deleteProfile(name, options) {
  const configPath = getConfigPath(options.global);
  ensureConfig(configPath);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  if (!config.profiles[name]) {
    console.log(chalk.red(`❌ Profile "${name}" does not exist.`));
    return;
  }

  const { confirm } = await inquirer.prompt({
    type: 'confirm',
    name: 'confirm',
    message: `Are you sure you want to delete profile "${name}"?`,
    default: false
  });

  if (!confirm) {
    console.log(chalk.yellow('Cancelled.'));
    return;
  }

  delete config.profiles[name];
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(chalk.green(`✅ Profile "${name}" deleted.`));
}
