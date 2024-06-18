const {defineConfig} = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; 

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    specPattern: "cypress/features/*",
    supportFile: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
