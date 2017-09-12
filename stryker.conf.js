module.exports = function(config) {
  config.set({
    files: [
      {
        pattern: "src/**/*.js",
        mutated: true,
        included: false
      },
      "test/**/*.js"
    ],
    testFramework: 'mocha',
    testRunner: 'mocha',
    reporter: ["clear-text", "progress"],
    coverageAnalysis: "all"
  });
};
