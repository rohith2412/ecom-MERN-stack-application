const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.json({ error: "All fields are required" });
      }
  
      const existingUser = await userModel.findOne({ name, email });
      if (existingUser) {
        return res.json({ error: "Email already exists" });
      }
  
      const userCreated = await userModel.create({
        name,
        email,
        password,
      });
  
      res.json("created succesfully");
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;