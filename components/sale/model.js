const mongoose = require("mongoose");

const Sale = mongoose.model("sales", {
  date: Date,
  total: String,
  idClient: String,
  details : Array
});

module.exports = Sale;
