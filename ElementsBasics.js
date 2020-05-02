describe('Elements Practice', function(){
	
	//browser.waitForAngularEnabled(false);
	var obj = require("./PageObject1.js");
	var d = require("./data.js");
	var using = require("jasmine-data-provider");
	
	beforeEach(function() {
		obj.getUrl();
	  }),
	  
	using(d.dataDriven, function (data, description){
	
		it('Locators'+ description, function(){
	
			//browser.sleep(2000);
			obj.firstInput.sendKeys(data.firstinput);
			obj.secondInput.sendKeys(data.secondinput);
			obj.goButton.click();
			//browser.sleep(10000);
			 obj.text();
			 expect(true).toBe(true);
			
		})
	}),	

	afterEach(function() {
		console.log("Test is completed")
	  });
})