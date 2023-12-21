const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mtf1in",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
