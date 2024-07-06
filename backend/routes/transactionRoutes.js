const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

// Create a new transaction
router.post("/addTr", transactionController.createTransaction);

// Retrieve all transaction
router.get("/getTr", transactionController.getAllTransactions); // Corrected function name here

// Retrieve a single transaction by ID
router.get("/getTr/:id", transactionController.getTransactionById);

// Update a transaction by ID
router.put("/putTr/:id", transactionController.updateTransactionById);

// Delete a transaction by ID
router.delete("/delTr/:id", transactionController.deleteTransactionById);

module.exports = router;







