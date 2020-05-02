describe('Practice Exercise', function(){
	
	function addProduct(productName){
		element.all(by.tagName("app-card")).each(function(item){
					
					item.element(by.css("h4 a")).getText().then(function(text){
						
						if(text==productName){
							item.element(by.css("button[class='btn btn-info']")).click();
						}
					})
					
				})
	}
	
	it('Form', function(){

		browser.get("https://rahulshettyacademy.com/angularpractice/");
		
		element(by.linkText("Shop")).click();
		
		addProduct("Samsung Note 8");
		addProduct("Nokia Edge");
		addProduct("Blackberry");
		
		element(by.partialLinkText("Checkout")).click();
		
		/*element(by.partialLinkText("Checkout")).getText().then(function(text){
			console.log(text.substring(11, 12));
			expect(text.substring(11, 12)).toBe("3");
		})*/
			
		
	})
})