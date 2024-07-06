const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
