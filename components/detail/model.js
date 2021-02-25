const mongoose = require("mongoose");

const Detail = mongoose.model("details", {
  idBook: String,
  nameBook: String,
  unitValue: Number,
  quantity: Number,
});

module.exports = Detail;