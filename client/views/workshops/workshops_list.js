Template.workshops_list.helpers({
  workshopCount: function () {
    return Workshops.find().count();
  },
  workshops: function() {
    return Workshops.find();
  }
});