const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Cart = sequelize.define("Cart", {});

module.exports = Cart;
