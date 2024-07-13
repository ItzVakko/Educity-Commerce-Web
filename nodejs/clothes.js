const mongoose = require("mongoose");

const ClothesSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  currency: String,
  size: [String],
});

module.exports = mongoose.model("Clothes", ClothesSchema);
