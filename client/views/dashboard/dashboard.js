Template.dashboard.helpers({
    displayname: function () {
       user = Meteor.user();
       return getDisplayName(user);
    }
});