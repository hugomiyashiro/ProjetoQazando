const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2yn7tb',
 
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório Qazando',
      reportTitle: 'Relatório Qazando',
       },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
