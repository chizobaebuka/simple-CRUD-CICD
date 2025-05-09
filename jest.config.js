/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest", {}],
  },
  presett: "ts-jest",
  testMatch: ['**/tests/**/*.test.ts'],
};