const {Page} = require('../page/page');

class menuBar extends Page{

	get Time_Tracking_text() {return $("a=Time Tracking"); }
	get Team_text() {return $('a=Team'); }
	get Project_text() {return $('a=Projects'); }
	get Client_text() { return $('a=Clients'); }
	get Invoices_text() { return $('a=Invoices'); }
	get Expenses_text() { return $('a=Reports'); }
	get Report_text() { return $('a=Settings'); }
	get span_letters() { return $('span=S.P'); }

};

module.exports = new menuBar();