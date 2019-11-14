export const warn = (message, hint) => {
  console.warn(`Warning: ${message}`, hint && `\n\tHint:${hint}`);
};
