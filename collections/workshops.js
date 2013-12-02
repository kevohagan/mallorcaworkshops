Workshops = new Meteor.Collection2("workshops", {
    schema: {
        title: {
            type: String,
            label: "Title",
            max: 200
        },
        author: {
            type: String,
            label: "Author",
            optional: true
        },
        students: {
            type: Number,
            label: "Number of students",
            min: 0,
            optional: true
        },
        location: {
            type: String,
            label: "Location of the workshop",
            optional: true
        },
        startDate: {
            type: Date,
            label: "Beginning of the workshop",
            optional: true
        },
        endDate: {
            type: Date,
            label: "End of the workshop",
            optional: true
        },
        summary: {
            type: String,
            label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
});


Workshops.allow({
  insert: isAdminById
, update: isAdminById
, remove: isAdminById
});