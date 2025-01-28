// Dependencies: none
// Description: This file contains utility functions for the segment component

function checkForHTMLi(input) {
  // Common HTML injection patterns
  const htmlPatterns = [
    /<div.*?>.*?<\/div>/gi,
    /<h1.*?>.*?<\/h1>/gi,
    /<p.*?>.*?<\/p>/gi,
    /<a.*?>.*?<\/a>/gi,
    /<span.*?>.*?<\/span>/gi,
    /<.*?>/gi, // Generic HTML tag detection
  ];

  // Check if input matches any HTML injection pattern
  for (const pattern of htmlPatterns) {
    if (pattern.test(input)) {
      return true; // HTML injection attempt detected
    }
  }
  return false; // No HTML injection attempt
}

function checkForXSS(input) {
  // Common XSS patterns
  const xssPatterns = [
    /<script.*?>.*?<\/script>/gi, // <script> tags
    /<img.*?src=.*?onerror=.*?>/gi, // <img> with onerror
    /<iframe.*?>.*?<\/iframe>/gi, // <iframe> tags
    /javascript:.*?/gi, // javascript: protocol
    /on\w+=.*?/gi, // Event handlers like onerror, onload, etc.
    /alert\(.*?\)/gi, // alert() function
    /document\.cookie/gi, // Accessing cookies
    /eval\(.*?\)/gi, // eval() function
  ];

  // Check if input matches any XSS pattern
  for (const pattern of xssPatterns) {
    if (pattern.test(input)) {
      return true; // XSS attempt detected
    }
  }
  return false; // No XSS attempt
}

function checkForSQLi(input) {
  // Common SQLi patterns
  const sqliPatterns = [
    /'.*?(OR|AND).*?('|"|`).*?=.*?('|"|`)/gi, // ' OR '1'='1
    /".*?(OR|AND).*?('|"|`).*?=.*?('|"|`)/gi, // " OR ""="
    /;.*?(DROP|DELETE|UPDATE|INSERT|SELECT).*?/gi, // ; DROP TABLE
    /UNION.*?SELECT.*?/gi, // UNION SELECT
    /--.*?/gi, // SQL comments
    /\/\*.*?\*\//gi, // SQL comments
    /\bOR\s+1=1\b/gi, // OR 1=1 (space insensitive)
    /\bAND\s+1=1\b/gi, // AND 1=1 (space insensitive)
    /'?\s+(OR|AND)\s+['"]?.*?=.*?['"]?/gi, // ' OR 'a'='a'
    /'?\s+(OR|AND)\s+1=1\s*;?\s*--/gi, // ' OR 1=1; --
    /"?\s+(OR|AND)\s+1=1\s*;?\s*--/gi, // " OR 1=1; --
    /\bEXEC(\s+|\()/gi, // EXEC() usage (common in SQLi)
    /\bINTO\s+OUTFILE\b/gi, // INTO OUTFILE
    /\bLOAD_FILE\s*\(/gi, // LOAD_FILE()
    /\bSELECT\s+.*\bFROM\b.*?\bWHERE\b.*?\b=\b.*?\s*;/gi, // SELECT ... FROM ... WHERE ... =
    /'?\s+(OR|AND)\s+\d+=\d+/gi, // OR 1=1 or similar numeric injection
    /\b(SLEEP|BENCHMARK)\b\s*\(/gi, // Time-based SQLi (e.g., SLEEP(5))
    /\bWAITFOR\s+DELAY\b/gi, // WAITFOR DELAY
    /\bHAVING\s+.*\b=.*?\b/gi, // HAVING clause injection
  ];

  // Check if input matches any SQLi pattern
  for (const pattern of sqliPatterns) {
    if (pattern.test(input)) {
      return true; // SQLi attempt detected
    }
  }
  return false; // No SQLi attempt
}

export function isAttackCommand(command) {
  // Check if input contains any attack patterns
  return (
    checkForHTMLi(command) || checkForXSS(command) || checkForSQLi(command)
  );
}

export function handleAttackCommands(command) {
  /**
   * Handle user attack command
   * @param {string} command - User input command
   * @returns {string} - Error message for the user
   */

  if (checkForXSS(command)) {
    // Custom funny error message for XSS attempt
    const errorMessage = `
XSS Detected!

Nice try, hacker! But you can't cross-site script me!
Remember I'm a cybersecurity engineer!
Try another type of vulnerability.

Sorry, but now I have to rickroll you...
`;
    return errorMessage;
  }
  if (checkForHTMLi(command)) {
    const errorMessage = `
HTML injection detected!

Nice try, but you can't insert HTML here. Remember I'm a cybersecurity engineer!
Try another type of vulnerability.

Sorry, but now I have to rickroll you...
`;

    return errorMessage;
  }

  if (checkForSQLi(command)) {
    // Custom funny error message for SQLi attempt
    const errorMessage = `
SQL Injection Detected!

Oh no you don't! No database here for you to inject SQL into. And if there was, I'd be prepared!

Sorry, but now I have to rickroll you...
`;
    return errorMessage;
  }
}
