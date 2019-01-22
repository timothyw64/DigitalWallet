define([
    'jquery',
    'backbone',
    'dust',
    'views/UserDetailsView',
    'utils',
    'templates/compiled/mainView'
], function ($, Backbone, dust, UserDetailsView) {

    var MainView = Backbone.View.extend({
        el: '#main-container',
        events: {
            "click #searchProfile": "searchProfile"
        },
        initialize: function () {
        },
        render: function () {
            var self = this.$el;
            dust.render("mainView", {}, function (err, out) {
                if (err) {
                    throw err;
                    return;
                }
                self.html(out);
            });
            
            deleteSessionStorage();
            
            return this;
        },
        searchProfile: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var userProfile = {
                firstName: $('#inputFirstName').val(),
                lastName: $('#inputLastName').val()
            };
            
            setSessionStorage("userProfile", userProfile);
            
            new UserDetailsView();
        }
    });
    return MainView;
});