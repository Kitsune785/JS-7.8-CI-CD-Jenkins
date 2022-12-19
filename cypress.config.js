const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "odg6ex",
  e2e: {
    baseUrl: 'http://qamid.tmweb.ru',
    //"retries": 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});