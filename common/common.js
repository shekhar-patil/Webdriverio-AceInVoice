const expect = require('chai').expect
const {Page} = require('../page/page');
let LoginPage = require('../page/login.page.js');
let menuBar = require('../page/menuBar.page.js');

class Common extends Page{

	login(email , password){
		LoginPage.emailTextBox.setValue(email);
		LoginPage.passwordTextBox.setValue(password);
		LoginPage.loginButton.click();

	}

	menu(){

		var menuOptions = [];
		expect(LoginPage.LoggingSuccessText.isVisible()).to.be.true;
		
	}


}


module.exports = new Common();