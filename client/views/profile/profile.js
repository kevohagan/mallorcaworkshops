
Template.profile.rendered = function() {

};


Template.profile.events({
  'click #modalButton': function() {
    return Session.set('isModalProfile', true);
  },
  'click #img-upload': function() {

      filepicker.pick({
          mimetypes: ['image/*', 'text/plain'],
          services:['COMPUTER', 'FACEBOOK', 'GMAIL','DROPBOX','INSTAGRAM','PICASA']
        },
        function(InkBlob){
          url = InkBlob.url;
          Meteor.call('addProfileImg', url );
        },
        function(FPError){
          console.log(FPError.toString());
        }
      );
  }
});


