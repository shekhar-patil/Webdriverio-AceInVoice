
const {Page} = require('./page')

class SignUp extends Page {

    get logo()              { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]');}
    get aceInVoiceText()    { return $('h2=AceInvoice');}
    get aceInVoiceTagLine() { return $('h2=Time Tracking and Invoicing'); }
    get emailTextBox()      { return $('.form-control[name=email]'); }
    get alredyHaveAccText() { return $('a.signup-button.border-radius-lg'); }
    get signUpButton()      { return $('.btn.btn-primary'); }
    get signInText()        { return $('strong=Sign in'); }
    get errorMsg()          { return $('.error'); }
    get createAccText()     { return $('h3=Create Account'); }

    
    submit() {
        this.signUpButton.click();
    }

}

module.exports = new SignUp();
