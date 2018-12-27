
let SignUp    = require('../page/signup.page.js')

describe("Signup page" ,() =>{

	beforeEach( ()=>{
		browser.url('./sign_up');
	})

	it("Should have all tabs of landing page" , ()=>{

		expect(SignUp.logo.isVisible()).to.exist;
		expect(SignUp.aceInVoiceText.getText()).to.equal("AceInvoice");
		expect(SignUp.aceInVoiceTagLine.getText()).to.equal("Time Tracking and Invoicing");
		expect(SignUp.emailTextBox.isVisible()).to.be.true;
		expect(SignUp.alredyHaveAccText.getText()).to.equal("Already have an account? Sign in");
		expect(SignUp.signUpButton.isVisible()).to.be.true;
		expect(SignUp.signInText.getText()).to.equal("Sign in");
		expect(SignUp.createAccText.getText()).to.equal("Create Account");

		expect(false).to.exist;
	});

	it("Should display Email error Msg" , ()=> {
		SignUp.submit();
		SignUp.errorMsg.waitForText(2000);
		expect(SignUp.errorMsg.getText()).to.equal("Email can not be empty");

	})
} )






