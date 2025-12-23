const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: String,
  description: String,
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Task", taskSchema);
