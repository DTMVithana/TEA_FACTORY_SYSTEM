const Salary = require("../models/Salary");

// Create a new production stock
exports.createSalary = async (req, res) => {
  try {
    const salary = new Salary(req.body);
    await salary.save();
    res.status(201).send(salary);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all production stocks
exports.getAllSalaries = async (req, res) => {
  try {
    const salaries = await Salary.find();
    res.status(200).send(salaries);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Retrieve a single stock by ID
exports.getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    if (!salary) {
      return res.status(404).send({ message: "Salary payment details not found" });
    }
    res.status(200).send(salary);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a production stock by ID
exports.updateSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!salary) {
      return res.status(404).send({ message: "Salary payment details not found" });
    }
    res.status(200).send(salary);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a stock by ID
exports.deleteSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findByIdAndDelete(req.params.id);
    if (!salary) {
      return res.status(404).send({ message: "Salary payment details not found" });
    }
    res.status(200).send({ message: "Salary payment deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
