/** @type {import('ts-jest').JestConfigWithTsJest} **/

var esmModules = ['export-to-csv'];

module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.[jt]sx?$": ["ts-jest",{}],
  },
  transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join('|')}))`,]
};