import fs from 'fs';
import inquirer from 'inquirer';
import { getConfigPath, ensureConfig } from '../bin/utils/scopeResolver.js';
import chalk from 'chalk';

export async function editProfile(name, options) {
  const configPath = getConfigPath(options.global);
  ensureConfig(configPath);
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

  if (!config.profiles[name]) {
    console.log(chalk.red(`❌ Profile "${name}" not found.`));
    return;
  }

  let commands = [...config.profiles[name]];

  let editing = true;
  while (editing) {
    console.log(chalk.yellow(`\nCurrent commands in "${name}":`));
    commands.forEach((cmd, index) => {
      console.log(`${index + 1}. ${cmd}`);
    });

    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'Choose an action:',
      choices: ['Add Command', 'Remove Command', 'Finish Editing']
    });

    if (action === 'Add Command') {
      const { newCmd } = await inquirer.prompt({
        type: 'input',
        name: 'newCmd',
        message: 'Enter command to add:'
      });
      if (newCmd) commands.push(newCmd);
    } else if (action === 'Remove Command') {
      const { index } = await inquirer.prompt({
        type: 'number',
        name: 'index',
        message: 'Enter command number to remove:'
      });
      if (index > 0 && index <= commands.length) {
        commands.splice(index - 1, 1);
      } else {
        console.log(chalk.red('Invalid command number.'));
      }
    } else {
      editing = false;
    }
  }

  config.profiles[name] = commands;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(chalk.green(`✅ Profile "${name}" updated.`));
}
