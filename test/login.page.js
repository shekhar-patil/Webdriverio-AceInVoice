var Page = require('./page')

var LoginPage = Object.create(Page, {

    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    form:     { get: function () { return browser.element('#login'); } },
    flash:    { get: function () { return browser.isVisible("div=Incorrect email or password") } },
    button:   { get: function () { return $(".form-buttons .btn-primary"); }},

    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = LoginPage;