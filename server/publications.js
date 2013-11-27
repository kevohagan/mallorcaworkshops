Meteor.publish('currentUser', function() {
  var user = Meteor.users.find(this.userId);
  return user;
});


Meteor.publish(null, function (){
  return Meteor.roles.find({})
})