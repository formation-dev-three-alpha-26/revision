const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const verifuser = await User.findOne({
      where: { email: req.body.email },
    });

    if (verifuser) {
      return res.status(400).send("email taken");
    }

    const hashedpassword = await bcrypt.hash(req.body.password, 10);

    const newuser = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: hashedpassword,
    });

    const token = jwt.sign(
      { username: newuser.username, id: newuser.id },
      process.env.JWT_SECRET,
    );

    res.status(201).json({
      user: { username: newuser.username, id: newuser.id },
      token: token,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const verifuser = await User.findOne({
      where: { email: req.body.email },
    });
    if (!verifuser) {
      return res.status(400).send("user doesnt exist");
    }

    const paswwordCorrect = await  bcrypt.compare(
      req.body.password,
      verifuser.password,
    );
    if (!paswwordCorrect) {
      return res.status(400).send("password uncorrect");
    }

    const token = jwt.sign(
      { username: verifuser.username, id: verifuser.id },
      process.env.JWT_SECRET,
    );

    res.status(200).json({
      user: { username: verifuser.username, id: verifuser.id },
      token: token,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
