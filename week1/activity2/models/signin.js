const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // Assuming you have a User model
const router = express.Router();

// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // Check for missing fields
  if (!email || !password) {
    return res.status(400).json("All fields are required.");
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid email or password.");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("Invalid email or password.");
    }

    // Successful signin
    res.status(200).json("Success");
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error.");
  }
});

module.exports = router;
