const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Plant = sequelize.define("Plant", {});

module.exports = Plant;
