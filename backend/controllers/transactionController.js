const Transaction = require("../models/Transaction");

// Create a new Transaction
exports.createTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all Transactions
exports.getAllTransactions = async (req, res) => {
  // Corrected function name here
  try {
    const transactions = await Transaction.find();
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single Transaction detail by ID
exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: "Transaction detail not found" });
    }
    res.status(200).send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a Transaction by ID
exports.updateTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!transaction) {
      return res
        .status(404)
        .send({ message: "Relevant transaction detail not found" });
    }
    res.status(200).send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a Transaction by ID
exports.deleteTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send({ message: "Transaction detail not found" });
    }
    res.status(200).send({ message: "Transaction details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};


