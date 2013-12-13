 var Eventbrite = Meteor.require('eventbrite');

var eb_client = Eventbrite({'app_key':"GCKOWXB5NXKTJVM7GZ", 'user_key':""}) ;

Meteor.methods({

  'event_get': function(id){
                  var event = Async.runSync(function(done) {
                      eb_client.event_get( {'id': id}, function(err, data){
                         done(null, data);
                      });
                    });
                    return event.result;
                },
  'event_search': function(params) {
                    var event = Async.runSync(function(done) {
                      eb_client.event_search( params, function(err, data){
                          console.log(err);
                          done(null,data);
                      });
                    });
                    return event.result;
                  },
  'event_list_attendees': function(id) {
                    var event = Async.runSync(function(done) {
                      eb_client.event_list_attendees( {'id': id}, function(err, data){
                         done(null, data);
                      });
                    });
                    return event.result;

  },
  'user_list_events': function(params) {

  },
  'organizer_list_events': function(id) {
                    var event = Async.runSync(function(done) {
                      eb_client.organizer_list_events( {'id': id}, function(err, data){
                         done(null, data);
                      });
                    });
                    return event.result;

  }
});