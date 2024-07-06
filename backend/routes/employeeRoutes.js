const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Create a new employee
router.post("/addEmp", employeeController.createEmployee);

// Retrieve all employees
router.get("/getEmp", employeeController.getAllEmployees);

// Retrieve a single employee by ID
router.get("/getEmp/:id", employeeController.getEmployeeById);

// Update an employee by ID
router.put("/putEmp/:id", employeeController.updateEmployeeById);

// Delete an employee by ID
router.delete("/delEmp/:id", employeeController.deleteEmployeeById);

module.exports = router;
