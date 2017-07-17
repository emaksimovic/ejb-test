define([
    'jquery',
    'underscore',
    'backbone',
    'knockout',
    'moment'
], function($, _, Backbone, ko, moment){

    var addPostViewModel = function(allPostsModel) {
        var self = this;

        self.name = ko.observable();
        self.content = ko.observable();
        self.createdBy = ko.observable();

        self.addPost = function() {
            allPostsModel.set({ name: self.name(),
                createdBy: self.createdBy(),
                content: self.content(),
                createdOn: moment().format() });
            allPostsModel.save();
        }
    }

    return addPostViewModel;

});
