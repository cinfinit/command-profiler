import fs from 'fs';
import { execSync } from 'child_process';
import { getConfigPath, ensureConfig } from '../bin/utils/scopeResolver.js';
import chalk from 'chalk';

export function runProfile(name, options) {
  const configPath = getConfigPath(options.global);
  ensureConfig(configPath);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  const profile = config.profiles[name];
  if (!profile) {
    console.log(chalk.red(`❌ Profile "${name}" not found.`));
    return;
  }

  console.log(chalk.green(`▶ Running profile: ${name}`));
  for (const command of profile) {
    console.log(chalk.cyan(`$ ${command}`));
    try {
      execSync(command, { stdio: 'inherit', shell: true });
    } catch (error) {
      console.log(chalk.red(`⚠️ Command failed: ${command}`));
      break; // Optional: stop on error
    }
  }

  console.log(chalk.green(`✅ Finished running "${name}"`));
}
