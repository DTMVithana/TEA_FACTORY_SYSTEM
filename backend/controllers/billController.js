const Bill = require("../models/Bill");

// Create a new category
exports.createBill = async (req, res) => {
  try {
    const bill = new Bill(req.body);
    await bill.save();
    res.status(201).send(bill);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all categories
exports.getAllBills = async (req, res) => {
  // Corrected function name here
  try {
    const bills = await Bill.find();
    res.status(200).send(bills);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single leave detail by ID
exports.getBillById = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill ) {
      return res.status(404).send({ message: "Bill payment detail not found" });
    }
    res.status(200).send(bill);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a category by ID
exports.updateBillById = async (req, res) => {
  try {
    const bill  = await Bill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!bill) {
      return res
        .status(404)
        .send({ message: "Relevant payment detail not found" });
    }
    res.status(200).send(bill);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a leave by ID
exports.deleteBillById = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndDelete(req.params.id);
    if (!bill) {
      return res.status(404).send({ message: "Payment detail not found" });
    }
    res.status(200).send({ message: "Payment details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
