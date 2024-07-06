const express = require("express");
const router = express.Router();
const transportController = require("../controllers/TransportController");

// Create a new transport details
router.post("/addTr", transportController.createTransport);

// Retrieve all transport details
router.get("/getTr", transportController.getAllTransports); 

// Retrieve transport details by ID
router.get("/getTr/:id", transportController.getTransportById);

// Update transport details by ID
router.put("/putTr/:id", transportController.updateTransportById);

// Delete transport details by ID
router.delete("/delTr/:id", transportController.deleteTransportById);

module.exports = router;
