Workshops = new Meteor.Collection2("workshops", {
    schema: {
        title: {
            type: String,
            label: "title",
            max: 200
        },
        description: {
            type: String,
            label: "description",
        },
        start_date: {
            type: Date,
            label: "Beginning of the workshop",
            optional: true
        },
        end_date: {
            type: Date,
            label: "End of the workshop",
            optional: true
        },
        privacy: {
            type: Number,
            label:"Private/Public",
            optional: true
        },
        capacity: {
            type: Number,
            label: "Capacity",
            min: 0,
            optional: true
        },
        venue_id: {
            type: Number,
            label: "venue_id",
            optional:true
        },
        organizer_id:{
            type: Number,
            label: "organizer_id",
            optional:true

        },
        currency:{
            type: String,
            label: "currency",
            optional:true

        }

    }
});


Workshops.allow({
  insert: isAdminById
, update: isAdminById
, remove: isAdminById
, fetch: []
});


// Workshops.allow({
//     insert: function() {
//         return true;
//     },
//     update: function() {
//         return true;
//     },
//     remove: function() {
//         return true;
//     },
//     fetch: []
// });
