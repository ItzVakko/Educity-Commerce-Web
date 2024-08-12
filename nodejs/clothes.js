const mongoose = require("mongoose");

const colorImageSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const mainImageSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ClothesSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mainImage: mainImageSchema,
  colorImages: [colorImageSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  saleAmount: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model("Clothes", ClothesSchema);
