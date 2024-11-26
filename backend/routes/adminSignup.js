const express = require('express');
const router = express.Router();
const adminModel = require('../models/adminModel');

router.post("/signup", async (req, res) => {
    try {
        const { admin_name, admin_email, admin_password } = req.body;

        if (!admin_name || !admin_email || !admin_password) {
            return res.json({ error: "All fields are required" });
        }

        const existingAdmin = await adminModel.findOne({ admin_email });
        if (existingAdmin) {
            return res.json({ error: "Admin email already exists" });
        }

        const adminCreated = await adminModel.create({
            admin_name,
            admin_email,
            admin_password,
        });

        res.json("Admin created successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
