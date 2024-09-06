const User = require("../Schema/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists!" });

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed!" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch)
      return res.status(200).json({ message: "Logged in successfully!" });

    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials!" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ error: "Login failed!" });
  }
};

module.exports = { register, login };
