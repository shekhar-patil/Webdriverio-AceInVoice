var LoginPage = require('./Verify.page.js');
var assert = require('chai').assert;

describe("Element Verification" , function(){
	beforeEach(function(){
		browser.url('./');
	})

	it("Logo Should present" , function(){
		var Logo = LoginPage.logo;

		console.log(Logo);
		assert.exists(Logo);

	})
	it("")
})