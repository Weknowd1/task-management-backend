const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  await User.create({ email, password });
  res.json({ message: "User registered" });
};
