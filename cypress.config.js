const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    specPattern: "cypress/features/*.feature",
    supportFile: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      on("after:run", () => {
        const report = require("multiple-cucumber-html-reporter");
        report.generate({
          jsonDir: "cypress/reports/",
          reportPath: "cypress/reports/"
        });
      });
    },
  },
});
