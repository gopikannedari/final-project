const User = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: "1d" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
