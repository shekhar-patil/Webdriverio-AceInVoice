const {Page} = require('./page')

class LoginPage extends Page {


    get logo() {return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]');}
    get loginBtn() {return $(".btn.btn-primary");}
    get aceInVoiceText() {return $("h2=AceInvoice");}
    get flashMsg() { return $("div=Incorrect email or password");}
    get logo() { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]'); }
    get loginButton() { return $(".form-buttons .btn-primary");}
    get signUpButton() { return $(".signup-button"); }
    get rememberCheckBox() { return $("label.d-inline-block"); }
    get emailTextBox() { return $(".form-control[name=email]"); }
    get passwordReset() { return $("div*=Forgot Password?"); }
    get passwordTextBox() { return $(".form-control[name=password]"); }
    get LoggingSuccessText() { return $("div=Logged in successfully."); }

    submit() {
        this.loginButton.click();
    }

};

module.exports = new LoginPage();