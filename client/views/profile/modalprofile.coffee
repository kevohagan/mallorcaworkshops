Template.modalprofile.events

  'click .done': ->
    email = $('#email').val()
    firstName = $('#firstName').val()
    lastName = $('#lastName').val()
    organization = $('#organization').val()
    location = $('#location').val()
    bio = $('#bio').val()
    url = $('#url').val()
    googlePlusUrl = $('#googlePlusUrl').val()
    if not googlePlusUrl.match(/^http/) and not googlePlusUrl.match(/^https/) and googlePlusUrl isnt ''
       googlePlusUrl = 'http://' + googlePlusUrl
    twitterHandle = $('#twitterHandle').val()
    Meteor.users.update(Meteor.userId(), {
      $set: {
      'profile.firstName': firstName
      'profile.lastName': lastName
      'profile.organization': organization
      'profile.location': location
      'profile.bio': bio
      'profile.url': url
      'profile.googlePlusUrl': googlePlusUrl
      'profile.twitterHandle': twitterHandle
      }
    })
    Meteor.call('changeEmail', email)
    $('#myModal').modal('hide')
    Router.go('/dashboard')







Template.modalprofile.helpers
  email: ->
    if Meteor.user().emails?
      Meteor.user().emails[0].address

  firstName: ->
    Meteor.user().profile.firstName

  lastName: ->
    Meteor.user().profile.lastName

  organization: ->
    Meteor.user().profile.organization

  location: ->
    Meteor.user().profile.location

  bio: ->
    Meteor.user().profile.bio

  url: ->
    Meteor.user().profile.url

  googlePlusUrl: ->
    Meteor.user().profile.googlePlusUrl

  twitterHandle: ->
    Meteor.user().profile.twitterHandle

  gravatarimg: ->
    Meteor.user().emails[0].address