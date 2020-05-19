var express = require("express");

var router = express.Router();
var burgerOfTheDay = require("../burgersOfTheDay.json");
var Burger = require("../models/burger_model");
router.get("/api/burgersOfTheDay", function(req, res) {
    console.log(burgerOfTheDay[Math.floor(Math.random() * burgerOfTheDay.length)]);
    res.json(burgerOfTheDay[Math.floor(Math.random() * burgerOfTheDay.length)]);
})
router.get("/api/allBurgers", function(req, res) {
    Burger.findAll({}).then(function(response) {
        console.log(res.json(response));

    })
});
router.post("/api/burgers", function(req, res) {
    Burger.create({
        name: req.body.name,
        eaten: false
    }).then(function(response) {
        res.json(response);
        res.end();
    })
})
router.put("/api/eat:id", function(req, res) {
    console.log(req.params.id);
    Burger.update({
        eaten: true
    }, {
        where: { id: req.params.id }
    }).then(function(response) {
        res.json(response);
    })
})

module.exports = router;