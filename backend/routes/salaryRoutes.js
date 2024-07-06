const express = require("express");
const router = express.Router();
const salaryController = require("../controllers/salaryController");

// Create a new prduction stock
router.post("/addSal", salaryController.createSalary);

// Retrieve all production stock
router.get("/getSal", salaryController.getAllSalaries);

// Retrieve a single stock by ID
router.get("/getSal/:id", salaryController.getSalaryById);

// Update a production stock by ID
router.put("/putSal/:id", salaryController.updateSalaryById);

// Delete a production stock by ID
router.delete("/delSal/:id", salaryController.deleteSalaryById);

module.exports = router;
