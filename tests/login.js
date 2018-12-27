const LoginPage = require('../page/login.page.js');
const Common = require('../common/common.js');

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

	it("should show the login Fail or Success after login." , () =>{

		expect(LoginPage.LoggingSuccessText.isVisible()).to.false;
		
		Common.login(); //We Can Change default parameter like Common.login("abc@xyz.com","pass")

		browser.waitUntil(() => {
	    	return ((LoginPage.LoggingSuccessText.isVisible()) === true || (LoginPage.LoggingFailedText.isVisible()) === true)
	    }, 5000, 'Should display Flash_Toast msg');


		expect(LoginPage.LoggingSuccessText.isVisible()).to.be.true;

	})

})