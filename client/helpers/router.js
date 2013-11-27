Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'problem404',
  loadingTemplate: 'loading',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  }
});







Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('example', {
    path:'/example'
  });

  this.route('dashboard', {
    path: '/dashboard',
    data: function(){
          return Meteor.user();
          }

  });

});