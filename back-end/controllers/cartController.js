const { where } = require("sequelize");
const Cart = require("../models/Cart");
const Plant = require("../models/Plant");

const addToCart = async (req, res) => {
  try {
    const plantId = req.body.plantId;
    const userId = req.user.id;

    const cartproduit = await Cart.findOne({
      where: { plantId, userId },
    });

    if (cartproduit) {
      cartproduit.quantity += 1;
      await cartproduit.save();
    } else {
      await Cart.create({
        userId,
        plantId,
      });
    }

    res.status(201).send("cart created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findAll({
      where: {
        userId,
      },
      include: [Plant],
    });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "error pour get cart" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    await Cart.destroy({ where: { userId: userId, plantId: req.params.id } });
    res.status(201).send("cart deleted");
  } catch (error) {
    res.status(500).json({ message: "error " });
  }
};
const updateQuantity = async (req, res) => {
  try {
    const userId = req.user.id;
    await Cart.update(
      { quantity: req.body.quantity },
      {
        where: { userId: userId, plantId: req.params.id },
      },
    );

    res.status(201).send("cart updated");
  } catch (error) {
    res.status(500).json({ message: "error " });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateQuantity,
};
