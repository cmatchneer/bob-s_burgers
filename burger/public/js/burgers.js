$(document).ready(function() {
    $.get("/api/allBurgers", function(response) {
        console.log(response);
        if (response.length !== 0) {
            for (var i = 0; i < response.length; i++) {
                var div = $("<div>");
                var name = $("<p>");
                div.attr("id", response[i].id);
                name.text(response[i].name);
                div.append(name);
                if (response[i].eaten) {
                    $("#eaten").append(div);
                }
                if (!response[i].eaten) {
                    $("#uneaten").append(div);
                }
            }
        }
    })
    $("#burger-add").on("click", function(add_to) {
        console.log("test");
        add_to.preventDefault();
        var newBurger = {
            name: $("#burger-name").val().trim(),
            eaten: false
        }
        $.post("/api/burgers", newBurger).then(function(response) {

            console.log(response);
        })
    })





});