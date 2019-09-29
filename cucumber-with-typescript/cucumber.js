let common = [
  '../features/**/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require step-definitions/**/*.ts', // Load step definitions
  '--format progress-bar', // Load custom formatter
  '--format node_modules/cucumber-pretty', // Load custom formatter
  '--tags "@ts"' // Only run features tagged for type script
].join(' ');

module.exports = {
  default: common
};
