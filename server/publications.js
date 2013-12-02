Meteor.publish('currentUser', function() {
  var user = Meteor.users.find(this.userId);
  return user;
});


Meteor.publish(null, function (){
  return Meteor.roles.find({})
})




Meteor.publish('allUsers', function(filterBy, sortBy, limit) {
  if(canViewById(this.userId)){
    var parameters = getUsersParameters(filterBy, sortBy, limit);
    if (!isAdminById(Meteor.user())) // if user is not admin, filter out sensitive info
      parameters.options = _.extend(parameters.options, {fields: privacyOptions});
    return Meteor.users.find(parameters.find, parameters.options);
  }
  return [];
});

Meteor.publish('allUsersAdmin', function() {
  if (isAdminById(this.userId)) {
    return Meteor.users.find();
  } else {
    return [];
  }
});



// -------------------------------------------- Settings -------------------------------------------- //

Meteor.publish('settings', function() {
  var options = {};
  if(!isAdminById(this.userId)){
    options = _.extend(options, {
      fields: {
        mailChimpAPIKey: false,
        mailChimpListId: false
      }
    });
  }
  return Settings.find({}, options);
});



// -------------------------------------------- Categories -------------------------------------------- //


Meteor.publish('categories', function() {
  if(canViewById(this.userId)){
    return Categories.find();
  }
  return [];
});