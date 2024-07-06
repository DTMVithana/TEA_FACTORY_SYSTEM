const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema({
  TransportId: { type: String, required: true },
  vehicleRegNo: { type: String, required: true },
  date: { type: String, required: true },
  driverName: { type: String, required: true },
  discription: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], required: true },
});



const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;