var LoginPage = require('./login.page.js');

describe("Login Page" , function(){
	beforeEach(function(){

		browser.url('./');
	})

	it("Should have title" , function(){

		
		var title = browser.getTitle();
		console.log(title);
	})

	it.only("should show the error msg when input is wrong" , function(){

		var isErrorShowing = LoginPage.flash;
		console.log(isErrorShowing);
		expect(isErrorShowing).to.be.false; 
		LoginPage.button.click();
		browser.pause(500);
		var isErrorShowing = LoginPage.flash[0];
		expect(isErrorShowing).to.be.true; 
	})
}) 