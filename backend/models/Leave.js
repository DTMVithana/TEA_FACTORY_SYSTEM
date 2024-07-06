const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  leaveNo: { type: String, required: true },
  leaveStatus: { type: Number, required: true },
  description: { type: String, required: true },
  noOfDates: { type: String, required: true },
  memberName: { type: String, required: true },
  category: { type: String, enum: ["Sick Leave", "Casual Leave", "Annual Leave"], required: true },
});

/*const leaveSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  });   */

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;