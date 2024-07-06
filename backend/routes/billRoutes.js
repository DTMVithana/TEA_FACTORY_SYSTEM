const express = require("express");
const router = express.Router();
const billController = require("../controllers/billController");

// Create a new category
router.post("/addBp", billController.createBill);

// Retrieve all category
router.get("/getBp", billController.getAllBills); 

// Retrieve a single category by ID
router.get("/getBp/:id", billController.getBillById);

// Update a category by ID
router.put("/putBp/:id", billController.updateBillById);

// Delete a category by ID
router.delete("/delBp/:id", billController.deleteBillById);

module.exports = router;
