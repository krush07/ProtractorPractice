describe('All Method', function(){
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}

	it('Locators', function(){

		browser.get("https://juliemr.github.io/protractor-demo/");
		Add(4,5);
		Add(6,7);
		Add(3,7);
		
		element.all(by.repeater("result in memory")).count().then(function(count){
			console.log(count);
			console.log("***************************");
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			
			item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
				
				console.log(text);
				
			})
		})
		
	})
})