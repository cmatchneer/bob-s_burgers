$(document).ready(() => {
    var sound = document.createElement('audio');
    $.get("/api/allBurgers", (response) => {
        console.log(response);
        // sound.setAttribute("src", "../audio/intro.m4a");
        // sound.play();

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
    $("#burger-add").on("click", (add_to) => {
        console.log($("#burger-name").val().split(" "));
        add_to.preventDefault();
        let order = false;
        const newBurger = {
            name: $("#burger-name").val().trim(),
            eaten: false
        }
        for (let i = 0; i < $("#burger-name").val().split(" ").length; i++) {
            if ($("#burger-name").val().split(" ")[i] === "burger") {
                order = true;
                $.post("/api/burgers", newBurger).then((response) => {

                    console.log(response);
                    location.reload();
                })
            }
        }
        if (order === false) {
            alert("please order a burger");
            $("#burger-name").val("")
            sound.setAttribute("src", "../audio/omg.m4a");
            sound.play();
        }

    })
    $("#uneaten").on("click", ".burgers", () => {
        const id = this.id;
        console.log(this.id);
        $.ajax("/api/eat" + id, {
            type: "PUT",

        }).then(function(response) {
            console.log(response);
            location.reload();
        })
    })

});