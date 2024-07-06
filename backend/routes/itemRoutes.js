const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Create a new item
router.post("/addIt", itemController.createItem);

// Retrieve all items
router.get("/getIt", itemController.getAllItems);

// Retrieve a single item by ID
router.get("/getIt/:id", itemController.getItemById);

// Update an item by ID
router.put("/putIt/:id", itemController.updateItemById);

// Delete an item by ID
router.delete("/delIt/:id", itemController.deleteItemById);

module.exports = router;


