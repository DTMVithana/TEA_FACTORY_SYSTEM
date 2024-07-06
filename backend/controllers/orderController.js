const Order = require("../models/Order");


exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getAllOrder = async (req, res) => {
  
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).send({ message: "Order detail not found" });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.updateOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res
        .status(404)
        .send({ message: "Relevant order detail not found" });
    }
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.deleteOrderById = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send({ message: "Order detail not found" });
    }
    res.status(200).send({ message: "Order details deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};
