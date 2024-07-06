const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Create a new order
router.post("/addord", orderController.createOrder);

// Retrieve all order
router.get("/getord", orderController.getAllOrder); // Corrected function name here

// Retrieve a single order by ID
router.get("/getord/:id", orderController.getOrderById);

// Update an order by ID
router.put("/putord/:id", orderController.updateOrderById);

// Delete an order by ID
router.delete("/delord/:id", orderController.deleteOrderById);

module.exports = router;
