
let LoginPage = require('../page/signup.page.js')

describe("Signup page" ,() =>{

	beforeEach( ()=>{
		browser.url('./');
	})

	it("Should have logo" , ()=>{
		console.log(LoginPage.logo.isVisible());
		expect(LoginPage.logo.isVisible()).to.be.true;

	})
} )






