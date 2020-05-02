var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ElementsBasics.js'],
  
  onPrepare:function(){
	  browser.driver.manage().window().maximize();
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
  },
  suites:
	  {
	  	Smoke:['All.js','ChainLocators.js'],
	  	Regression:['ElementsBasics.js']
	  },
  
//Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
};