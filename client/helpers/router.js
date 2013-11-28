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


//--------------------------------------------------------------------------------------------------//
//--------------------------------------------- Filters --------------------------------------------//
//--------------------------------------------------------------------------------------------------//

var filters = {

  nProgressHook: function () {
    if (this.ready()) {
      NProgress.done();
    } else {
      NProgress.start();
      this.stop();
    }
  },

  resetScroll: function () {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      // throwError('Please Sign In First.')
      console.log("not logged in");
      this.render('not_logged_in');
      this.stop();
    }
  },

  isLoggedOut: function() {
    if(Meteor.user()){
      this.render('already_logged_in');
      this.stop();
    }
  },

  // canView: function() {
  //   if(Session.get('settingsLoaded') && !canView()){
  //     console.log('cannot view')
  //     this.render('no_rights');
  //     this.stop();
  //   }
  // },

  canPost: function () {
    if(!Meteor.loggingIn() && Session.get('settingsLoaded') && !canPost()){
      throwError(i18n.t("Sorry, you don't have permissions to add new items."))
      this.render('no_rights');
      this.stop();
    }
  },

  canEditPost: function() {
    var post = Posts.findOne(this.params._id);
    if(!Meteor.loggingIn() && Session.get('settingsLoaded') && !currentUserCanEdit(post)){
      throwError(i18n.t("Sorry, you cannot edit this post."))
      this.render('no_rights');
      this.stop();
    }
  },

  canEditComment: function() {
    var comment = Comments.findOne(this.params._id);
    if(!Meteor.loggingIn() && Session.get('settingsLoaded') && !currentUserCanEdit(comment)){
      throwError(i18n.t("Sorry, you cannot edit this comment."))
      this.render('no_rights');
      this.stop();
    }
  },

  hasCompletedProfile: function() {
    var user = Meteor.user();
    if (user && ! Meteor.loggingIn() && ! userProfileComplete(user)){
      this.render('user_email');
      this.stop();
    }
  },

  userIsAdmin: function() {
    var user = Meteor.user();
    if (isAdmin(user) === false) {
        this.render('no_rights');
        this.stop();
    } else {
      this.render();
    }

  }

}

Router.before(filters.userIsAdmin, {only: ['admin']});
Router.before(filters.isLoggedIn,{except: ['home','entrySignIn','entrySignUp','entryResetPassword','entryForgotPassword','blogIndex','blogShow']});


Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('example', {
    path:'/example',
  });

  this.route('dashboard', {
    path: '/dashboard',
    data: function(){
          return Meteor.user();
          }
  });

  this.route('admin');


});