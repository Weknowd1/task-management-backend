const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./src/config/db");

connectDB();


app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
