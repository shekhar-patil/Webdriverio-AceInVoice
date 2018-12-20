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

		expect(LoginPage.flashMsg).to.be.false; 
		LoginPage.button.click();
		browser.pause(500);

		expect(LoginPage.flashMsg[0]).to.be.true; 
	})
}) 