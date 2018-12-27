

const LandingPage = require("../page/landing.page.js");
const CommonPage  = require("../common/common.js");

describe("Landing page" , ()=> {
	beforeEach(()=>{
		browser.url("./");
		CommonPage.login();
	})

	it("should have Menu Tab visible" , ()=>{
		
		browser.waitUntil(()=>{
			return (LandingPage.Time_Tracking_text.isVisible()) === true
		} , 5000);

		CommonPage.menuTabs();

	})
})