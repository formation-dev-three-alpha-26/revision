const express = require("express");
const cartrouter = express.Router();


const {
      addToCart,
  getCart,
  removeFromCart,
  updateQuantity,
} = require("../controllers/cartController")

const verif = require("../middleware/authMiddleware")
cartrouter.use(verif)
cartrouter.get("/" , getCart)
cartrouter.post("/add" , addToCart)
cartrouter.delete("/:id" ,removeFromCart )
cartrouter.put("/:id" , updateQuantity)

module.exports = cartrouter;