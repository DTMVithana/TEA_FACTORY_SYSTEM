const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryNo: { type: String, required: true },
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  Bcost: { type: String, required: true },
  Mprice: { type: String, required: true },
  rating: { type: String, enum: ["High", "Medium", "Low"], required: true },
});

/*const productSchema = new mongoose.Schema({
  batchNo: { type: String, required: true },
  category: { type: Number, required: true },
  EDate: { type: String, required: true },
  MDate: { type: String, required: true },
  qty: { type: String, required: true },
  weight: { type: String, required: true },
  });   */

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;