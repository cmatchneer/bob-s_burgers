var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
    name: Sequelize.STRING,
    eaten: Sequelize.BOOLEAN,
})
Burger.sync();

module.exports = Burger;