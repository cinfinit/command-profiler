import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export function initConfig() {
  const dirPath = path.join(process.cwd(), 'cmdprofiler');
  const configPath = path.join(dirPath, 'config.json');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(chalk.green(`📁 Created folder: ${dirPath}`));
  } else {
    console.log(chalk.yellow(`⚠️ Folder already exists: ${dirPath}`));
  }

  if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify({ profiles: {} }, null, 2));
    console.log(chalk.green(`✅ Created config file: ${configPath}`));
  } else {
    console.log(chalk.yellow(`⚠️ Config file already exists: ${configPath}`));
  }
}
