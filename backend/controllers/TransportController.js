const Transport = require("../models/Transport");

// Create a new transport details
exports.createTransport = async (req, res) => {
  try {
    const transport = new Transport(req.body);
    await transport.save();
    res.status(201).send(transport);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all transport details
exports.getAllTransports = async (req, res) => {
  // Corrected function name here
  try {
    const transports = await Transport.find();
    res.status(200).send(transports);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single leave detail by ID
exports.getTransportById = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).send({ message: "Transport detail not found" });
    }
    res.status(200).send(transport);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update transport details by ID
exports.updateTransportById = async (req, res) => {
  try {
    const transport  = await Transport.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!transport) {
      return res
        .status(404)
        .send({ message: "Relevant transport detail not found" });
    }
    res.status(200).send(transport);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete transport details by ID
exports.deleteTransportById = async (req, res) => {
  try {
    const transport = await Transport.findByIdAndDelete(req.params.id);
    if (!transport) {
      return res.status(404).send({ message: "Transport detail not found" });
    }
    res.status(200).send({ message: "Transport details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
