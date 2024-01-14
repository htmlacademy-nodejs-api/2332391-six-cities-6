import { Command } from './commands/command.interface.js';

type CommandCollection = Record<string, Command>;

export class CLICollection {
  private commands: CommandCollection = {};

  public registerCommands(commandList: Command[]): void {
    commandList.forEach((command) => {
      if (Object.hasOwn(this.commands, command.getName())) {
        throw new Error(`Command ${command.getName()} already exists`);
      }
      this.commands[command.getName()] = command;
    });
  }
}
