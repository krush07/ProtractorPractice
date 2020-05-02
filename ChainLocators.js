describe('ChainLocators', function(){

	it('Locators', function(){

		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(12);
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		element(by.model("second")).sendKeys(12);
		element(by.id("gobutton")).click();
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
			
			console.log(text);
			
		})
		//element(by.css("h2[class='ng-binding']"))
		
	})
})