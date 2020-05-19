$(document).ready(() => {
    const sound = document.createElement('audio');

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
    $("#burger-of-the-day").on("click", (add_to) => {
        $.get("/api/burgersOfTheDay", function(response) {
            sound.setAttribute("src", "../audio/burger.m4a");
            sound.play();
            const burgerOfTheDay = {
                name: response,
                eaten: false
            }
            console.log(burgerOfTheDay);
            sound.onended = function() {
                $.post("/api/burgers", burgerOfTheDay).then((response) => {
                    console.log(response);
                    location.reload();
                })
            }
        })
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
            if ($("#burger-name").val().split(" ")[i].toLowerCase() === "burger") {
                order = true;
                $.post("/api/burgers", newBurger).then((response) => {

                    console.log(response);
                    location.reload();
                })
            }
        }
        if (order === false) {
            sound.setAttribute("src", "../audio/omg.m4a");
            sound.play();
            alert("please order a burger");
            $("#burger-name").val("")
        }

    })
    $("#burger-of-the-day").on("click", (add_to) => {
        add_to.preventDefault();
        // $.post("/api/burgers", newBurger).then((response) => {
        //     console.log(response);
        //     location.reload();
        // })
    })
    $("#uneaten").on("click", ".burgers", function() {
        const id = this.id;
        console.log(this.id);

        $.ajax("/api/eat" + id, {
            type: "PUT",

        }).then(function(response) {
            console.log(response);
            sound.setAttribute("src", "../audio/clean-plate.m4a");
            sound.play();
            sound.onended = function() {
                location.reload();
            }
        })
    })

});