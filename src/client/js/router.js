define([
    'jquery',
    'backbone',
    'views/MainView',
    'views/AddCreditCardView'
], function($, Backbone, MainView, AddCreditCardView) {

    AppRouter = Backbone.Router.extend({
        initialize: function(options) {
        },
        routes: {
            "": "home",
            "add" : "addCreditCard"
        },
        home: function() {
           new MainView().render();
        },
        addCreditCard: function() {
           new AddCreditCardView().render();
        }
    });

    var initialize = function() {
        new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});