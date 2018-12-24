var Page = require('../page/page')

var Common = Object.create(Page, {

	login: {function(instance , email , pass){
		console.log(instance);
		//instance.emailTextBox.setValue("abc@bigbinary.com");
		//browser.pause(500);
	}},

})

module.exports = Common;