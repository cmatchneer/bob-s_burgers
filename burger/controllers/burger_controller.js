var express = require("express");

var router = express.Router();

var Burger = require("../models/burger_model");

router.get("/", function(req, res) {
    Burger.findAll({}).then(function(response) {
        console.log(res.json(response));
        res.render("index");
    })
});
router.post("api/burgers", function(req, res) {
    Burger.create({
        burger: "Rest in Peas Burger",
        eaten: false
    }).then(function(response) {
        res.end();
    })
})

module.exports = router;