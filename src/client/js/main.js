require.config({
  baseUrl: "js/",
  paths: {
    jquery: '../libs/jquery/jquery-1.11.0.min',
    underscore: '../libs/underscore/underscore',
    backbone: '../libs/backbone/backbone',
    dust: '../libs/dust/dust-full.min',
    app: 'app'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    dust: {
      exports: "dust"  
    }
  }
});

require([
  'jquery',
  'app'
], function( $, App ){

    $(function(){
      App.initialize();
    });
});
