const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  PId: { type: String, required: true },
  EId: { type: String, required: true },
  Bsalary: { type: String, required: true },
  Famount: { type: String, required: true },
  date: { type: String, required: true },
  type: { type: String, enum: ["month", "week", "day"], required: true },
});

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;
