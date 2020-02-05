$(document).ready(function() {
    $("#burger-add").on("click", function(add_to) {
        console.log("test");
        add_to.preventDefault();
        var newBurger = {
            name: $("#burger-name").val().trim(),
            eaten: false
        }
        $.post("/api/burgers", newBurger).then(function(response) {
            // if(response.length === 0){
            //     var div = $("<div>");
            //     var name = $("<p>");

            // }
            // for(var i =0;i< response.length;i++){

            // }
            console.log(response);
        })
    })





});