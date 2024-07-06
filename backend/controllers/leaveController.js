const Leave = require("../models/Leave");

// Create a new leave
exports.createLeave = async (req, res) => {
  try {
    const leave = new Leave(req.body);
    await leave.save();
    res.status(201).send(leave);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all leaves
exports.getAllLeaves = async (req, res) => {
  // Corrected function name here
  try {
    const leaves = await Leave.find();
    res.status(200).send(leaves);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single leave detail by ID
exports.getLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).send({ message: "Leave detail not found" });
    }
    res.status(200).send(leave);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a leave by ID
exports.updateLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!leave) {
      return res
        .status(404)
        .send({ message: "Relevant leave detail not found" });
    }
    res.status(200).send(leave);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a leave by ID
exports.deleteLeaveById = async (req, res) => {
  try {
    const leave = await Leave.findByIdAndDelete(req.params.id);
    if (!leave) {
      return res.status(404).send({ message: "Leave detail not found" });
    }
    res.status(200).send({ message: "Leave details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
