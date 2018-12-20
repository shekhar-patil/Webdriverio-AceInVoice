var LoginPage = require('./Verify.page.js');
var assert = require('chai').assert;

describe("Element Verification" , function(){
	beforeEach(function(){
		browser.url('./');
	})

	it("Logo Should present" , function(){
		
		expect(LoginPage.logo).to.be.true;

	})
	it("Sign link should be present" , function(){
		
		expect(LoginPage.signUpLink).to.be.true;
	})

	it("Remember me checkbox is present" , function(){

		expect(LoginPage.rememberCheckBox).to.be.true;
	})

	it("Should have email and Password textBox" , function(){
		
		expect(LoginPage.emailTextBox).to.be.true;
		expect(LoginPage.passwordTextBox).to.be.true;
		expect(LoginPage.passwordReset).to.be.true;

	})

})