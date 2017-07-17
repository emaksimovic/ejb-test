requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery/jquery-2.1.4',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
        knockout: 'libs/knockout/knockout-3.3.0',
        moment:'libs/moment/moment-with-locales.min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        knockout: {
        	exports: 'ko'
        },
        moment: {
            exports: 'moment'
        }
    }
});

require(['app/main'], function(App) {
  App.initialize();
});