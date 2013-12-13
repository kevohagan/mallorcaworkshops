

Template.new_workshop.rendered = function () {

 // WorkshopsForm = new AutoForm(Workshops);

         Workshops.callbacks({
            insert: function(error, result) {
                if (error) {
                    console.log("Insert Error:", error);
                } else {
                    alert("Inserted!");
                    console.log("Insert Result:", result);
                }
            },
            update: function(error) {
                if (error) {
                    console.log("Update Error:", error);
                } else {
                    alert("Updated!");
                }
            },
            remove: function(error) {
                console.log("Remove Error:", error);
            }
        });

};




