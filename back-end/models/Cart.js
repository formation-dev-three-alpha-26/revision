const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const User = require("./User");
const Plant = require("./Plant");
const Cart = sequelize.define("Cart", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

User.hasMany(Cart, { foreignKey: { name: "userId" } });
Cart.belongsTo(User, { foreignKey: { name: "userId" } });

Plant.hasMany(Cart, { foreignKey: { name: "plantId" } });
Cart.belongsTo(Plant, { foreignKey: { name: "plantId" } });

module.exports = Cart;
