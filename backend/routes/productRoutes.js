const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Create a new prduction stock
router.post("/addPro", productController.createProduct);

// Retrieve all production stock
router.get("/getPro", productController.getAllProducts);

// Retrieve a single stock by ID
router.get("/getPro/:id", productController.getProductById);

// Update a production stock by ID
router.put("/putPro/:id", productController.updateProductById);

// Delete a production stock by ID
router.delete("/delPro/:id", productController.deleteProductById);

module.exports = router;
