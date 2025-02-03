import {
  functionCommandsList,
  printCommandsList,
  printTextHiddenCommandsList,
  redirectCommands,
  inputNotAllowedPatterns,
  inputAllowedPatterns,
} from "../commands/Commands";

export function isPrintCommand(command) {
  /**
   * Check if the command is a print command
   * @param {string} command
   * @returns {boolean}
   */
  return (
    printCommandsList.includes(command) ||
    printTextHiddenCommandsList.includes(command)
  );
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

export function isNotAllowedInput(input) {
  return inputNotAllowedPatterns.some((pattern) => pattern.pattern.test(input));
}

export function getNotAllowedInputMessage(input) {
  const pattern = inputNotAllowedPatterns.find((pattern) =>
    pattern.pattern.test(input)
  );
  return pattern.message;
}

export function getNotAllowedInputAction(input) {
  const pattern = inputNotAllowedPatterns.find((pattern) =>
    pattern.pattern.test(input)
  );
  return pattern.action;
}

export function isAllowedInput(input) {
  return inputAllowedPatterns.some((pattern) => pattern.pattern.test(input));
}

export function getAllowedInputMessage(input) {
  const pattern = inputAllowedPatterns.find((pattern) =>
    pattern.pattern.test(input)
  );
  return pattern.message;
}

export function getAllowedInputAction(input) {
  const pattern = inputAllowedPatterns.find((pattern) =>
    pattern.pattern.test(input)
  );
  return pattern.action;
}