
function pageElements(){
	
		this.getUrl=function(){
			browser.get("https://juliemr.github.io/protractor-demo/");
		}

		this.firstInput = element(by.model("first"));
		this.secondInput = element(by.model("second"));
		this.goButton = element(by.id("gobutton"));
		this.text=function(){element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
			
			console.log(text);
			
		})}
		
}

module.exports = new pageElements();
