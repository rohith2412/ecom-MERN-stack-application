const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Use cookie-parser middleware
router.use(cookieParser());

router.post("/login", async (req, res) => {
    let { email, password } = req.body;
  
    // Validate input
    if (!email || !password) {
      return res.json("Email and password are required");
    }
  
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.json("Invalid email");
        }

        // Compare hashed password with entered password
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }

            if (result) {
                // Create JWT token with correct payload
                const token = jwt.sign(
                    { id: user._id, email: user.email }, 
                    process.env.JWT_KEY, 
                    { expiresIn: '1h' }
                );

                // Send token as cookie
                res.cookie("token", token, { httpOnly: true });  // Added httpOnly for better security
                return res.json("Login successful");
            } else {
                return res.json("Incorrect password");
            }
        });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
