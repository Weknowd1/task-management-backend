const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./src/config/db");

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
