var LoginPage = require('../page/login.page.js');

describe("Login Page" , function(){
	beforeEach(function(){

		browser.url('./');
	})
	it.only("Verify all the Elements" , () =>{
		expect(LoginPage.logo.isVisible()).to.be.true;
		expect(LoginPage.emailTextBox.isExisting()).to.be.true;
		expect(LoginPage.aceInVoiceText.getText()).to.be.equal("AceInvoice");
		expect(LoginPage.passwordTextBox.isExisting()).to.be.true;
		expect(LoginPage.passwordReset.isExisting()).to.be.true;
		expect(LoginPage.signUpButton.isExisting()).to.be.true;
		expect(LoginPage.rememberCheckBox.isExisting()).to.be.true;
		expect(LoginPage.rememberCheckBox.isSelected()).to.be.false;
	})

	it("Should have title" , function(){

		var title = browser.getTitle();
		console.log(title);
	})

	it("should show the error msg when input is wrong" , function(){

		expect(LoginPage.flashMsg.isVisible()).to.false;
		LoginPage.email.
		LoginPage.submit();
		expect(LoginPage.flashMsg.isVisible()).to.true; 
	})
}) 