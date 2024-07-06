import React, { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import Sidebar from "./Sidebar";
import Layout from "../pages/CLayout";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    orderID: "",
    customerNIC: "",
    date: "",
    deliveryaddress: "",
    additionalcharges: "",
    finalprice: "",
    orderstatus: "",
    customerID: "",
    ordertype: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        
        await axios.post("http://localhost:8070/api/v1/orders/addord", formData);
        setSuccessMessage("Order added successfully.");
        setErrorMessage("");
        
        setFormData({
      orderID: "",
      customerNIC: "",
      date: "",
      deliveryaddress: "",
      additionalcharges: "",
      finalprice: "",
      orderstatus: "",
      customerID: "",
      ordertype: "",
        });
      } catch (error) {
        console.error("Error adding order:", error);
        setErrorMessage("Error adding order. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  

  const validateForm = () => {
    const {
      orderID,
      customerNIC,
      date,
      additionalcharges,
      finalprice,
    } = formData;
    if (
      !orderID ||
      !customerNIC||
      !date ||
      !additionalcharges ||
      !finalprice
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (!validatecustomerNIC(customerNIC)) {
      setErrorMessage("Please provide a valid NIC number.");
      return false;

      
    }
    
    return true;
  };
  const validatecustomerNIC = (customerNIC) => {
    
    const regex = /^(?:\d{9}[vxVX]|\d{12})$/;
    return regex.test(customerNIC);
  };
  
  return (
    <Layout>
      
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add Order</h2>
        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
        <div class="grid grid-cols-3 gap-4 mb-4">
  <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
              Order ID:
            </label>
    <input 
    type="text" 
    name="orderID"
    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={formData.orderID}
              onChange={handleChange}
    class="w-full px-4 py-2 border rounded-md"
    required/>
  </div>
  <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
              Customer NIC:
            </label>
    <input 
    type="text" 
    class="w-full px-4 py-2 border rounded-md"
    name="customerNIC"
    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={formData.customerNIC}
              onChange={handleChange}
              required
              />
   </div>
  <div>
  <label className="block text-gray-700 text-sm font-bold mb-2">
              Date:
            </label>
    <input type="date" 
    name="date"
    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    value={formData.date}
              onChange={handleChange}
              class="w-full px-4 py-2 border rounded-md"
              required/>
  </div>
</div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Delivery Address:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="deliveryaddress"
              value={formData.deliveryaddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Additional charges:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="additionalcharges"
              value={formData.additionalcharges}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Final Price:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="finalprice"
              value={formData.finalprice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Order Status:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="orderstatus"
              value={formData.orderstatus}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Declined">Declined</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Customer ID:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="customerID"
              value={formData.customerID}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Order Type:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="ordertype"
              value={formData.ordertype}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Custom order">Custom</option>
              <option value="Signature order">Signature</option>
              <option value="Premium order">Premium</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Order
          </button>
          <button
            onClick={() => navigate("/ord")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddOrder;
