// cypress.config.js

// Ensure you have Cypress imported at the top
const Cypress = require('cypress');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Ensure Allure plugin writes results
      require('@shelex/cypress-allure-plugin/writer')(on);
      return config;
    },
  },
};
