// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/allPostsView',
  'app/views/addPostView'/*,
  'views/contributors/ContributorsView',
  'views/footer/FooterView'*/
], function($, _, Backbone, AllPostsView, AddPostView/*, ContributorsView, FooterView*/) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'add': 'addPost',
      'users': 'showContributors',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:addPost', function(){
        var addPostView = new AddPostView();
        addPostView.render();
    });

    app_router.on('route:showContributors', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        //var contributorsView = new ContributorsView();
        alert('contributors');
    });

    app_router.on('route:defaultAction', function (actions) {
        var allPostsView = new AllPostsView();
        allPostsView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
