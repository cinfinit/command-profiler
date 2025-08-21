#!/usr/bin/env node
import { Command } from 'commander';
import { createProfile } from './commands/create.js';
import { listProfiles } from './commands/list.js';
import { runProfile } from './commands/run.js';
import { editProfile } from './commands/edit.js';
import { deleteProfile } from './commands/delete.js';
import { initConfig } from './commands/init.js';


const program = new Command();

program
  .name('cmdprofiler')
  .description('Scoped command profiles for project & global usage')
  .version('1.0.0');


program
  .command('init')
  .description('Initialize cmdprofiler config in current directory')
  .action(initConfig);

program
  .command('create')
  .argument('<name>', 'Profile name')
  .option('--global', 'Use global scope')
  .description('Create a new profile')
  .action(createProfile);

program
  .command('list')
  .option('--global', 'Use global scope')
  .description('List available profiles')
  .action(listProfiles);

program
  .command('run')
  .argument('<name>', 'Profile name')
  .option('--global', 'Use global scope')
  .description('Run a profile')
  .action(runProfile);

program
  .command('edit')
  .argument('<name>', 'Profile name')
  .option('--global', 'Use global scope')
  .description('Edit a profile')
  .action(editProfile);

program
  .command('delete')
  .argument('<name>', 'Profile name')
  .option('--global', 'Use global scope')
  .description('Delete a profile')
  .action(deleteProfile);

program.parse();
