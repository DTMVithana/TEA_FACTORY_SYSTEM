const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batchNo: { type: String, required: true },
  categoryNo: { type: Number, required: true },
  MDate: { type: String, required: true },
  EDate: { type: String, required: true },
  qty: { type: String, required: true },
  quality: { type: String, enum: ["High", "Medium", "Low"], required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
