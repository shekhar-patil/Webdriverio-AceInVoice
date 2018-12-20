var Page = require('./page')

var LoginPage = Object.create(Page, {


    logo:    { get: function () { return $('.app-icon'); }},
    button:  { get: function () { return $(".form-buttons .btn-primary"); }},
    form:    { get: function () { return $("#new_user"); } },

    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = LoginPage;