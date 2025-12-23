const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// hash password in register
// compare + token in login

exports.register = async (req, res) => {
  const { email, password } = req.body;
  await User.create({ email, password });
  res.json({ message: "User registered" });
};
