let LoginPage = require('../page/login.page.js');
let Common = require('../common/common.js');

describe("Login Page" , () => {
	beforeEach(() =>{

		browser.url('./');
	})
	it("Should Verify all the Elements" , () =>{
		expect(LoginPage.logo.isVisible()).to.be.true;
		expect(LoginPage.emailTextBox.isExisting()).to.be.true;
		expect(LoginPage.aceInVoiceText.getText()).to.be.equal("AceInvoice");
		expect(LoginPage.passwordTextBox.isExisting()).to.be.true;
		expect(LoginPage.passwordReset.isExisting()).to.be.true;
		expect(LoginPage.signUpButton.isExisting()).to.be.true;
		expect(LoginPage.rememberCheckBox.isExisting()).to.be.true;
		expect(LoginPage.rememberCheckBox.isSelected()).to.be.false;

	})
	it("Should have title" , () =>{

		expect(browser.getTitle()).to.be.equal("Ace Invoice");
		
	})

	it.only("should show the error msg when input is wrong" , () =>{

		expect(LoginPage.flashMsg.isVisible()).to.false;
		Common.login("patilshekhar@gmail.com" , "shekhar123");
		browser.pause(500);
		Common.menu();
	})

})