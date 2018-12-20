var Page = require('./page')

var LoginPage = Object.create(Page, {


    logo:           { get: function () { return browser.isVisible('.app-icon'); }},
    loginButton:    { get: function () { return $(".form-buttons .btn-primary"); }},
    signUpLink:     { get: function () { return browser.isExisting(".signup-button"); }},
    rememberCheckBox: { get: function () { return browser.isExisting("label.d-inline-block"); }},
    emailTextBox:   { get: function () { return browser.isExisting(".email"); }},
    passwordTextBox:{ get: function () { return browser.isExisting(".password"); }},
    passwordReset:  { get: function () { return browser.isExisting("div*=Forgot Password?"); }},

    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = LoginPage;

