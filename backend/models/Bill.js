const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  payId: { type: String, required: true },
  billNo: { type: String, required: true },
  amount: { type: String, required: true },
  date: { type: String, required: true },
  section: { type: String, required: true },
  type: { type: String, enum: ["cash", "cheque", "other"], required: true },
});



const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;