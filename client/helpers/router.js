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

Router.before(filters.userIsAdmin, {only: ['admin','categories','new_workshop']});
Router.before(filters.isLoggedIn,{except: ['home','entrySignIn','entrySignUp','entryResetPassword','entryForgotPassword','blogIndex','blogShow','workshops','contact']});





// Maps


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
  this.route('categories');
  this.route('contact');




    //Users

  this.route('all-users', {
    path: '/all-users/',
    template: 'all_users',
    waitOn: function() {
      var limit = parseInt(this.params.limit) || 20;
      return Meteor.subscribe('allUsersAdmin');
    },
    data: function() {
      var limit = parseInt(this.params.limit) || 20,
          parameters = getUsersParameters(this.params.filterBy, this.params.sortBy, limit),
          filterBy = (typeof this.params.filterBy === 'string') ? this.params.filterBy : 'all',
          sortBy = (typeof this.params.sortBy === 'string') ? this.params.sortBy : 'createdAt';
      Session.set('usersLimit', limit);
      return {
        users: Meteor.users.find(parameters.find, parameters.options),
        filterBy: filterBy,
        sortBy: sortBy
      }

      // return  {
      //   users: Meteor.users.find().fetch()
      // }
    }
  });



});


//------------------------------------------- Workshops ------------------------------------------//
//--------------------------------------------------------------------------------------------------//
  Router.map(function () {
    // ...


  this.route('workshops',{
    path:'/workshops',
    template:'workshops_list',
    data: function() {
      return Workshops.find().fetch();
    }
  });

  this.route('new_workshop', {
    path:'/admin/new_workshop',
    template:'new_workshop'
  });


  });




//------------------------------------------- Controllers ------------------------------------------//
//--------------------------------------------------------------------------------------------------//


// Controller for all posts lists

// WorkshopsListController = RouteController.extend({
//   template:'workshops_list',
//   waitOn: function () {
//     return Meteor.subscribe('workshops');
//      },
//   data: function () {
//       var workshops = Workshops.find();
//         workshopsCount = workshops.count();

//     return {
//       workshopslist: workshops,
//       workshopsCount: workshopsCount
//     }
//   }

// });

