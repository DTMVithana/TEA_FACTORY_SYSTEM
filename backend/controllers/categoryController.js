const Category = require("../models/Category");

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all categories
exports.getAllCategories = async (req, res) => {
  // Corrected function name here
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single leave detail by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category ) {
      return res.status(404).send({ message: "Category detail not found" });
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a category by ID
exports.updateCategoryById = async (req, res) => {
  try {
    const category  = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res
        .status(404)
        .send({ message: "Relevant category detail not found" });
    }
    res.status(200).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a leave by ID
exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category detail not found" });
    }
    res.status(200).send({ message: "Category details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
