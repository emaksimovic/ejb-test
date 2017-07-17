define([
    'jquery',
    'underscore',
    'backbone',
    'knockout',
    'text!app/templates/allPostsTemplate.html',
    'app/viewmodels/allPosts-vm',
    'app/models/allPostsModel'
], function($, _, Backbone, ko, allPostsTemplate, allPostsViewModel, AllPostsModel){

    var allPostsView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.model = new AllPostsModel();
            this.model.fetch();
            this.viewModel = new allPostsViewModel(this.model);
            this.listenTo(this.model, 'change', this.viewModel.updateData);
        },
        render: function(){
            $('.menu li').removeClass('active');
            $('.menu li a[href="#"]').parent().addClass('active');
            this.$el.html(allPostsTemplate);
            if(ko.dataFor(this.el)) {
                ko.cleanNode(this.el);
            }
            ko.applyBindings(this.viewModel, this.el);
        }

    });

    return allPostsView;

});