const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/userModel");
const routes = require('routes');
const userSignup = require('./routes/userSignup');
const userLogin = require('./routes/userLogin');
const adminSignup = require('./routes/adminSignup');
const adminLogin = require('./routes/adminLogin');
const adminPanel = require('./routes/adminPanel')
const shop = require('./routes/shop');
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/user", userSignup);       
app.use("/api/v1/user", userLogin);        
app.use("/api/v1/admin", adminSignup);     
app.use("/api/v1/admin", adminLogin);  
app.use("/api/v1/admin", adminPanel);
app.use("/api/v1/user", shop);   

app.listen(2000);
