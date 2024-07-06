const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  tno: { type: String, required: true },
  sid: { type: String, enum: ["S001", "S002", "S003","S004","S005","S006","S007","S008","S009","S0010"], required: true },
  unitPrice: { type: String, required: true },
  quantity: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ["sale", "scrap", "assembly"], required: true },
});

/*const leaveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  });   */

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;