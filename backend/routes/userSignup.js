const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
require('dotenv').config();



router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    bcrypt.genSalt(10, async (err, salt) => {
      if (err) return res.status(500).json({ error: "Error generating salt" });

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) return res.status(500).json({ error: "Error hashing password" });

        // Create user
        try {
          let userCreated = await userModel.create({
            name,
            email,
            password: hash
          });

          // Generate JWT token
          let token = jwt.sign({ id: userCreated._id, email: userCreated.email }, process.env.JWT_KEY, { expiresIn: '1h' });

          // Set token in cookie
          res.cookie("token", token);

          res.json({ message: "User created successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Error creating user" });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
