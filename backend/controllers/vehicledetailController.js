const Vehicledetail  = require("../models/vehicleDetail");

// Create a new vehicledetails
exports.createVehicledetail = async (req, res) => {
  try {
    const VEHICLED = new Vehicledetail(req.body);
    await VEHICLED.save();
    res.status(201).send(VEHICLED);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all vehicledetails
exports.getAllVehicledetail = async (req, res) => {
  try {
    const vehicledetails = await Vehicledetail.find();
    res.status(200).send(vehicledetails);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single vehicledetails by ID
exports.getAllVehicledetails = async (req, res) => {
  try {
    const VEHICLED = await Vehicledetail.findById(req.params.id);
    if (!VEHICLED) {
      return res.status(404).send({ message: "Vehicle details  not found" });
    }
    res.status(200).send(VEHICLED);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an vehicledetails by ID
exports.updateVehicledetailById = async (req, res) => {
  try {
    const VEHICLED = await Vehicledetail.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!VEHICLED) {
      return res.status(404).send({ message: "Vehicle details  not found" });
    }
    res.status(200).send(VEHICLED);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an vehicledetails by ID
exports.deleteVehicledetailById = async (req, res) => {
  try {
    const VEHICLED = await Vehicledetail.findByIdAndDelete(req.params.id);
    if (!VEHICLED) {
      return res.status(404).send({ message: "Vehicle detail  not found" });
    }
    res.status(200).send({ message: "Vehicle details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
