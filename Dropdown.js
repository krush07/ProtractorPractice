describe('Calculation', function(){
	
	function Calc(a,b,c){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item){
			
			item.getAttribute("value").then(function(value){
				
				if(value==c){
					item.click();
				}
			})
		})
		
		element(by.id("gobutton")).click();
	}

	it('Locators', function(){

		browser.get("https://juliemr.github.io/protractor-demo/");
		Calc(4,5,"ADDITION");
		Calc(6,7,"DIVISION");
		Calc(20,7,"MODULO");
		Calc(14,7,"MULTIPLICATION");
		Calc(14,7,"SUBTRACTION");
		
		element.all(by.repeater("result in memory")).each(function(item){
			
			item.element(by.css("td:nth-child(3)")).getText().then(function(text) {
				
				console.log(text);
				
			})
		})
		
	})
})