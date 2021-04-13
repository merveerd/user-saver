const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  createdName: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
