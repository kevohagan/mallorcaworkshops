Template.userCard.helpers
  name: ->
    "#{@profile.firstName} #{@profile.lastName}"

  subhead: ->
    if @profile.organization && @profile.location
      [@profile.organization, @profile.location].join(' - ')
    else
      if @profile.organization
        return @profile.organization
      if @profile.location
        return @profile.location

  bio: -> @profile.bio
  url: -> @profile.url
  googlePlusUrl: -> @profile.googlePlusUrl
  twitterHandle: -> @profile.twitterHandle
  gravatarimg: -> Gravatar.imageUrl(Meteor.user().emails[0].address, {s:'150',d:'http://mallorcaworkshops.org.s3.amazonaws.com/gears.png'})