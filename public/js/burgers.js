$(document).ready(function() {
    $.get("/api/allBurgers", function(response) {
        console.log(response);
        if (response.length !== 0) {
            for (var i = 0; i < response.length; i++) {
                var div = $("<div>");
                div.text(response[i].name);
                if (response[i].eaten) {
                    div.attr({
                        class: "done",
                        id: response[i].id

                    });
                    $("#eaten").append(div);
                }
                if (!response[i].eaten) {
                    div.attr({
                        class: "burgers",
                        id: response[i].id

                    });
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
            location.reload();
        })
    })
    $("#uneaten").on("click", ".burgers", function() {
        var id = this.id;
        console.log(this.id);
        $.ajax("/api/eat" + id, {
            type: "PUT",

        }).then(function(response) {
            console.log(response);
            location.reload();
        })
    })

});