const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  customerNIC: { type: String, required: true },
  date: { type: String, required: true },
  deliveryaddress: { type: String, required: true },
  additionalcharges: { type: Number, required: true },
  finalprice: { type: Number, required: true },
  orderstatus: { type: String, enum: ["Pending", "Confirmed", "Declined"], required: true },
  customerID: { type: String, required: true },
  ordertype: { type: String, enum: ["Custom order", "Signature order", "Premium order"], required: true },
});

// const orderSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     email: { type: String, required: true },
//     phoneNumber: { type: String, required: true },
//     address: { type: String, required: true },
//     gender: { type: String, enum: ["SA01","SA02","SA03"], required: true },
//   });   

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;