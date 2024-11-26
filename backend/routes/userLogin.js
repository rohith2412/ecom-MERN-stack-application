const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post("/login", async (req, res) => {
    let { email, password } = req.body;
  
    if (!email || !password) {
      return res.json("Email and password are required");
    }
  
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json("invalid name");
    }
    if (user.password != password) {
      return res.json("invalid pass");
    }
    res.json("login succesfull");
  });

module.exports = router;