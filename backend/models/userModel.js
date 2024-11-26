const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/userSchema')

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;