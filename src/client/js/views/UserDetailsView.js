define([
    'jquery',
    'backbone',
    'dust',
    'models/UserDetailsModel',
    'templates/compiled/userDetails',
    'utils'
], function ($, Backbone, dust, UserDetailsModel) {

    var UserDetailsView = Backbone.View.extend({
        el: '#details',
        events: {
            "click [id^=addCreditCard]": "addCreditCard"
        },
        initialize: function () {
            this.model = new UserDetailsModel();
            this.listenTo(this.model, 'change:profiles', this.render);
            this.model.fetch();
        },
        render: function () {
            var self = this.$el;
            dust.render("userDetails", this.model.toJSON(), function (err, out) {
                if (err) {
                    throw err;
                    return;
                }
                self.html(out);
            });

            return this;
        },
        addCreditCard: function (event) {
            event.preventDefault();
            event.stopPropagation();

            var id = $(event.currentTarget).attr('id');
            var userId = id.substring(id.indexOf("_") + 1);

            var item = {};
            if (userId !== "") {
                item = _.findWhere(this.model.get("profiles"), {"_id": userId});
                setSessionStorage("userProfile", item);
            }

            Backbone.history.navigate('#add', {trigger: true, replace: true});
        }
    });
    return UserDetailsView;
});