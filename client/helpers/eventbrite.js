
event_get = function getEvent(id) {
 Meteor.call('event_get',id, function (err, data) {
    if (err) console.log(err);
    console.log(data);
  });
}

event_list_attendees = function event_list_attendees(id) {
 Meteor.call('event_list_attendees',id, function (err, data) {
    if (err) console.log(err);
    console.log(data);
  });
}


organizer_list_events = function organizer_list_events(id) {
Meteor.call('organizer_list_events',id, function (err, data) {
  if (err) console.log(err);
  console.log(data);
});
}
