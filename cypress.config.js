const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter:"cypress-allure-plugin",
  reporterOptions:{
    resultsDir:"allure-results"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@shelex/cypress-allure-plugin")(on);
      return config;
    },
  },
});
