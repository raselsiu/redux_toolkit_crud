const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const app = express();
const userModel = require("../models/User");
//
//
// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/redux_crud");
//
//

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//
//
// Handling All Request
app.get("/users", (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//
//

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
