define([
    'jquery',
    'backbone',
    'dust',
    'models/AddCreditCardModel',
    'utils',
    'templates/compiled/addCreditCard',
], function ($, Backbone, dust, AddCreditCardModel) {

    var AddCreditCardView = Backbone.View.extend({
        el: '#main-container',
        events: {
            "click #save": "saveCreditCard",
            "click #cancel": "cancel"
        },
        initialize: function () {
            this.model = new AddCreditCardModel();
        },
        render: function () {
            var self = this.$el;
            dust.render("addCreditCard", {}, function (err, out) {
                if (err) {
                    throw err;
                    return;
                }
                self.html(out);
            });
            var userProfile = getSessionStorage("userProfile");
            $("#firstName").val(userProfile.firstName);
            $("#lastName").val(userProfile.lastName);

            return this;
        },
        saveCreditCard: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var formValues = "{";
            $("form#addForm input").each(function () {
                var input = $(this);
                formValues += '"' + input.attr('id') + '" : "' + input.val() + '",';
            });
            
            // Trim ending ','.
            var jsonForm = JSON.parse(formValues.substring(0, formValues.length - 1) + "}");

            this.model.save(jsonForm);
            
            Backbone.history.navigate('', {trigger: true, replace: true});
        },
        cancel: function(event) {
            event.preventDefault();
            event.stopPropagation();
            Backbone.history.navigate('', {trigger: true, replace: true});
        }
    });
    return AddCreditCardView;
});