const config = {
  roots: ["validadores"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["validadores/**/*.js"],
  coveragePathIgnorePatterns: ["validadores/index.js"],
  coverageReporters: ["text", "html"],
};

module.exports = config;
