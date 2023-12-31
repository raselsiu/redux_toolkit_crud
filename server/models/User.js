const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  website: String,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
