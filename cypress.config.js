const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = {
  "video": false,
  "nonGlobalStepDefinitions": true,
  pageLoadTimeout: 30000,
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.js"],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
};


// const { defineConfig } = require("cypress");

// const cucumber = require('cypress-cucumber-preprocessor').default;
// module.exports = defineConfig({
//   "video":false,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on('file:preprocessor', cucumber())
//     },
//   },
// });
