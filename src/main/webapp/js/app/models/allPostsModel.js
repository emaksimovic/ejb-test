define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var OwnerModel = Backbone.Model.extend({

        initialize: function( options ) {
        },

        url : function() {
            return 'http://localhost:10080/PostsServer/rest/posts';
        }
    });

    return OwnerModel;

});
