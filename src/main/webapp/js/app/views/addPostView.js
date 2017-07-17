define([
    'jquery',
    'underscore',
    'backbone',
    'knockout',
    'text!app/templates/addPostTemplate.html',
    'app/viewmodels/addPost-vm',
    'app/models/allPostsModel'
], function($, _, Backbone, ko, addPostTemplate, AddPostViewModel, AllPostsModel){

    var addPostView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.model = new AllPostsModel();
            this.viewModel = new AddPostViewModel(this.model);
        },
        render: function(){
            $('.menu li').removeClass('active');
            $('.menu li a[href="#/add"]').parent().addClass('active');
            this.$el.html(addPostTemplate);
            if(ko.dataFor(this.el)) {
                ko.cleanNode(this.el);
            }
            ko.applyBindings(this.viewModel, this.el);
        }

    });

    return addPostView;

});
