const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Import routes
const userSignup = require("./routes/userSignup");
const userLogin = require("./routes/userLogin");
const adminSignup = require("./routes/adminSignup");
const adminLogin = require("./routes/adminLogin");
const adminPanel = require("./routes/adminPanel");
const shop = require("./routes/shop");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// Routes
app.use("/api/v1/user", userSignup);
app.use("/api/v1/user", userLogin);
app.use("/api/v1/admin", adminSignup);
app.use("/api/v1/admin", adminLogin);
app.use("/api/v1/admin", adminPanel);
app.use("/api/v1/user", shop);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
