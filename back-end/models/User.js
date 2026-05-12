const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define("User", {});

module.exports = User;
