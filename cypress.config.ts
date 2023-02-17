const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(
        'file:preprocessor', cucumber())
      return config
    },
	  specPattern: '**/demo.feature'
  },
  reporter: 'cypress-mochawesome-reporter',
	reporterOptions: {
		reportPageTitle: 'demo-project',
		embeddedScreenshots: true,
		inlineAssets: true,
		saveAllAttempts: false,
	},
});
