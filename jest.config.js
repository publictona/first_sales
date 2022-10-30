/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  collectCoverage: true,
  testTimeout: 120000,
};
