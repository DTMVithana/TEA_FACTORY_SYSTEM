const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Create a new category
router.post("/addCg", categoryController.createCategory);

// Retrieve all category
router.get("/getCg", categoryController.getAllCategories); 

// Retrieve a single category by ID
router.get("/getCg/:id", categoryController.getCategoryById);

// Update a category by ID
router.put("/putCg/:id", categoryController.updateCategoryById);

// Delete a category by ID
router.delete("/delCg/:id", categoryController.deleteCategoryById);

module.exports = router;
