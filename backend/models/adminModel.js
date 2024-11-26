const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    admin_name: String,
    admin_email: String,
    admin_password: String
});

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
