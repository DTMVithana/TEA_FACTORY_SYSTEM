const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  level: { type: String, required: true },
  quantity: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["machinaryInv", "productInv", "rawMaterialInv"], required: true },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
