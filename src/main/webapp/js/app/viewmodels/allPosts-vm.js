define([
    'jquery',
    'underscore',
    'backbone',
    'knockout',
    'moment'
], function($, _, Backbone, ko, moment){

    var allPostsViewModel = function(allPostsModel) {
        var self = this;

        self.posts = ko.observableArray();

        self.updateData = function() {
            var postsArray = new Array();
            _.each(allPostsModel.attributes, function(value) {
                value.createdOn = moment(value.createdOn).format('MMM Do YYYY');
                postsArray.push(value);
            });
            self.posts(postsArray);
        }
    }

    return allPostsViewModel;

});
