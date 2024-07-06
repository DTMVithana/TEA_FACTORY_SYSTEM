const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// Create a new customer
router.post("/addcus", customerController.createCustomer);

// Retrieve all customer
router.get("/getcus", customerController.getAllCustomer);

// Retrieve a single customer by ID
router.get("/getcus/:id", customerController.getCustomerById);

// Update an customer by ID
router.put("/putcus/:id", customerController.updateCustomerById);

// Delete an customer by ID
router.delete("/delcus/:id", customerController.deleteCustomerById);

module.exports = router;
