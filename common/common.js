const expect = require('chai').expect
const {Page} = require('../page/page');
const LoginPage = require('../page/login.page.js');
const menuBar = require('../page/landing.page.js');
const variables = require('./variables.js');

class Common extends Page{

	login(email = variables.email, password = variables.password){
		LoginPage.emailTextBox.setValue(email);
		LoginPage.passwordTextBox.setValue(password);
		LoginPage.loginButton.click();

	}

	menuTabs(){
		
		expect(menuBar.Time_Tracking_text.getText()).to.equal("Time Tracking");
		expect(menuBar.Team_text.getText()).to.equal("Team");
		expect(menuBar.Project_text.getText()).to.equal("Projects");
		expect(menuBar.Client_text.getText()).to.equal("Clients");
		expect(menuBar.Invoices_text.getText()).to.equal("Invoices");
		expect(menuBar.Expenses_text.getText()).to.equal("Reports");
		expect(menuBar.Report_text.getText()).to.equal("Settings");
		expect(menuBar.span_letters.getText()).to.equal("S.P");
	}


}

module.exports = new Common();