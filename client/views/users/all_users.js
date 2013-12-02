Template.all_users.helpers({
  loadMoreUrl: function(){
    var count = parseInt(Session.get('usersLimit')) + 20;
    return '/all-users/' + count + '?filterBy='+this.filterBy+'&sortBy='+this.sortBy;
  },
  allPostsLoaded: function () {
    return false;
    //TODO: hide load more button when all users have been loaded
  },
  activeClass: function (link) {
    if(link == this.filterBy || link == this.sortBy)
      return "active";
  },
  sortBy: function (parameter) {
    return "?filterBy="+this.filterBy+"&sortBy="+parameter;
  },
  filterBy: function (parameter) {
    return "?filterBy="+parameter+"&sortBy="+this.sortBy;
  },

  numberOfUsers : function() {
    return Meteor.users.find().count();
  }
});

Template.all_users.rendered = function () {
  // ...
      $(document).ready(function() {
        var panels = $('.user-infos');
        var panelsButton = $('.dropdown-user');
        panels.hide();

        //Click dropdown
        panelsButton.click(function() {
            //get data-for attribute
            var dataFor = $(this).attr('data-for');
            var idFor = $(dataFor);

            //current button
            var currentButton = $(this);
            idFor.slideToggle(400, function() {
                //Completed slidetoggle
                if(idFor.is(':visible'))
                {
                    currentButton.html('<i class="icon-chevron-up text-muted"></i>');
                }
                else
                {
                    currentButton.html('<i class="icon-chevron-down text-muted"></i>');
                }
            })
        });


        // $('[data-toggle="tooltip"]').tooltip();

        // $('button').click(function(e) {
        //     e.preventDefault();
        //     alert("This is a demo.\n :-)");
        // });
    });
};
