describe('Actions Practice', function(){

	it('Dropdown', function(){

		browser.get("https://www.jetblue.com/");
		element(by.css("input[placeholder='Where from?']")).clear();
		browser.actions().mouseMove(element(by.css("input[placeholder='Where from?']")).sendKeys("Camaguey")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform();
		
	})
})