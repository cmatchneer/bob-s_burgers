var Sequelize = require("sequelize");
var sequelize = new Sequelize("quychpf1tndfi43f", "vhuy3t1uvh4j0mbt", "	fyhgs26rbg8glggp", {
    host: "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;