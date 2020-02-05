var express = require("express");

var router = express.Router();

var Burger = require("../models/burger_model");

router.get("/", function(req, res) {
    Burger.findAll({}).then(function(response) {
        console.log(res.json(response));
        response.sendFile(path.join(__dirname, "../public/index.html"));
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

module.exports = router;