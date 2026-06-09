const { defineConfig } = require('cypress'); 

module.exports = defineConfig({ 
  e2e: { 
    baseUrl: 'https://www.saucedemo.com', 
    viewportWidth: 1366, 
    viewportHeight: 768, 
    video: true, 
    screenshotOnRunFailure: true, 
    setupNodeEvents(on, config) { 
      return config; 
    } 
  } 
});