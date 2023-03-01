const {sequelize, Sequelize} = require("./db");
//import datatypes from sequelize
const {DataTypes} = require("sequelize");

const Songs = sequelize.define('Songs', {
    title:DataTypes.STRING,
    year: DataTypes.NUMBER
})

module.exports = Songs;
