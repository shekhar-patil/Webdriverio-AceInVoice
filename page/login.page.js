var Page = require('./page')

var LoginPage = Object.create(Page, {


    loginBtn:       { get: function () { return $(".btn.btn-primary"); }},
    aceInVoiceText: { get: function () { return $("h2=AceInvoice"); }},
    flashMsg:       { get: function () { return $("div=Incorrect email or password") } },
    logo:           { get: function () { return $('img[src="/packs/icon-5c84dcebf26984e5eb25872975ab9ea7.svg"]'); }},
    loginButton:    { get: function () { return $(".form-buttons.btn-primary"); }},
    signUpButton:   { get: function () { return $(".signup-button"); }},
    rememberCheckBox: { get: function () { return $("label.d-inline-block"); }},
    emailTextBox:   { get: function () { return $(".email"); }},
    passwordTextBox:{ get: function () { return $(".password"); }},
    passwordReset:  { get: function () { return $("div*=Forgot Password?"); }},

    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.loginButton.click();
    } }
});

module.exports = LoginPage;