import {
  functionCommandsList,
  printCommandsList,
  printTextHiddenCommandsList,
  redirectCommands,
} from "../commands/Commands";

export function isPrintCommand(command) {
  /**
   * Check if the command is a print command
   * @param {string} command
   * @returns {boolean}
   */
  return printCommandsList.includes(command) || printTextHiddenCommandsList.includes(command);
}

export function isFunctionCommand(command) {
  return functionCommandsList.includes(command);
}

export function isRedirectCommand(command) {
  return Object.keys(redirectCommands).includes(command);
}

export function isValidCommand(command) {
  return (
    isPrintCommand(command) ||
    isFunctionCommand(command) ||
    isRedirectCommand(command)
  );
}

export function autocompleteCommand(command) {
  const validCommands = [
    ...printCommandsList,
    ...functionCommandsList,
    ...Object.keys(redirectCommands),
  ];
  const matchedCommands = validCommands.filter((c) => c.startsWith(command));
  return matchedCommands;
}
