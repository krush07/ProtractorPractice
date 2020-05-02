describe('Practice Exercise', function(){

	it('Form', function(){

		browser.get("https://rahulshettyacademy.com/angularpractice/");
		
		element(by.css("input[name='name']")).sendKeys("Krushna");
		element(by.name("email")).sendKeys("abcd@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("hello@123");
		element(by.css("input[class='form-check-input']")).click();
		element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female"));
		element(by.id("inlineRadio2")).click();
		element(by.css("input[name='bday']")).sendKeys("12/04/2020");
		element(by.buttonText("Submit")).click().then(function(){
			
			element(by.css("div[class*='success']")).getText().then(function(text){
				
				var actualText = "Success! The Form has been submitted successfully!."
					
				console.log(text.length);
				console.log(text);
				expect(text.substr(2, text.length)).toBe(actualText);
			})
		})
			
		
	})
})