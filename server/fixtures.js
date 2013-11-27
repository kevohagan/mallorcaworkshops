
Meteor.startup(function(){

if (Meteor.users.find().fetch() === 0) {

  var users = [
      {name:"user",email:"user@user.com",roles:['user']},
      {name:"Admin User",email:"admin@user.com",roles:['admin']}
    ];

  _.each(users, function (user) {
    var id;

    id = Accounts.createUser({
      email: user.email,
      password: "user",
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      Roles.addUsersToRoles(id, user.roles);
    }

  });

}

});
