const mongoose = require("mongoose");

const VEHICLEDSchema = new mongoose.Schema({
  transportId: { type: String, required: true },
  vehicleRId: { type: String, required: true },
  date: { type: String, required: true },
  vehicleType: { type: String, required: true },
  vehicleBrand: { type: String, required: true },
  mileage: { type: String,  required: true },
});

const VEHICLED = mongoose.model("VEHICLED",VEHICLEDSchema);

module.exports = VEHICLED;
