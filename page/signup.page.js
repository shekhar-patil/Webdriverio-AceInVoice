
const {Page} = require('./page')

class LoginPage extends Page {

    get logo() {return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]');}


    open() {
        super.open('login');
    }

    submit() {
        this.submitBtn.click();
    }

}

module.exports = new LoginPage();
