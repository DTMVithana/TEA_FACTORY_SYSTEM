const express = require("express");
const router = express.Router();
const leaveController = require("../controllers/leaveController");

// Create a new leave
router.post("/addLv", leaveController.createLeave);

// Retrieve all leave
router.get("/getLv", leaveController.getAllLeaves); // Corrected function name here

// Retrieve a single leave by ID
router.get("/getLv/:id", leaveController.getLeaveById);

// Update a leave by ID
router.put("/putLv/:id", leaveController.updateLeaveById);

// Delete a leave by ID
router.delete("/delLv/:id", leaveController.deleteLeaveById);

module.exports = router;
