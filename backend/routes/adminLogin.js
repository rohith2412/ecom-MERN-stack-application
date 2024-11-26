const express = require('express');
const router = express.Router();
const adminModel = require('../models/adminModel');

router.post("/login", async (req, res) => {
    const { admin_email, admin_password } = req.body;

    if (!admin_email || !admin_password) {
        return res.json("Admin email and password are required");
    }

    const admin = await adminModel.findOne({ admin_email });
    if (!admin) {
        return res.json("Invalid admin email");
    }

    if (admin.admin_password !== admin_password) {
        return res.json("Invalid password");
    }

    res.json("Admin login successful");
});

module.exports = router;
