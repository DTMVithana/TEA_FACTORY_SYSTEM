const express = require("express");
const router = express.Router();
const vehicledetailController = require("../controllers/vehicledetailController");

// Create a new vehicle detail
router.post("/addVdt", vehicledetailController.createVehicledetail);

// Retrieve all  vehicle detail
router.get("/getVdt", vehicledetailController.getAllVehicledetail);

// Retrieve a single  vehicle detail by ID
router.get("/getVdt/:id", vehicledetailController.getAllVehicledetails);

// Update an  vehicle detail by ID
router.put("/putVdt/:id", vehicledetailController.updateVehicledetailById);

// Delete an  vehicle detail by ID
router.delete("/delVdt/:id", vehicledetailController.deleteVehicledetailById);

module.exports = router;
