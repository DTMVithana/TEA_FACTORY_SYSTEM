const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  nic: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  salesassistant: { type: String, enum: ["SA01","SA02","SA03"], required: true },
  registrationdate: { type: String, required: true },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
