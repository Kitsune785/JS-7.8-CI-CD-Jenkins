const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "odg6ex",
    baseUrl: 'http://qamid.tmweb.ru',
    "retries": 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
