const Customer = require("../models/Customer");


// exports.createCustomer = async (req, res) => {
//   try {
//   const customer = new Customer(req.body);
//     await customer.save();
//     res.status(201).send(customer);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

exports.createCustomer = async (req, res) => {
  try {
    const {nic} = req.body;

    const existingCustomer = await Customer.findOne({ nic });
    if (existingCustomer) {
      return res.status(400).send({ error: "This NIC number is already added" });
    }

    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};



exports.getAllCustomer = async (req, res) => {
  try {
    const customer = await Customer.find();
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).send({ message: "Customer not found" });
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!customer) {
      return res.status(404).send({ message: "Customer not found" });
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deleteCustomerById = async (req, res) => {
  try {
    constcustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).send({ message: "Customer not found" });
    }
    res.status(200).send({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
