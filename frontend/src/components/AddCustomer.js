import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/CLayout";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    nic: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    salesassistant: "",
    registrationdate: "",
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
        
        await axios.post(
          "http://localhost:8070/api/v1/customers/addcus",
          formData
        );
        setSuccessMessage("Customer added successfully.");
        setErrorMessage("");
        
        setFormData({
          nic: "",
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
          salesassistant: "",
          registrationdate: "",
        });
      } catch (error) {
        // console.error("Error adding customer:", error);
        // setErrorMessage("Error adding customer. Please try again later.");
        // setSuccessMessage("");
        alert(error.response.data.error)
      }
    }
  };

  const validateForm = () => {
    const {name, email, nic, phoneNumber, address,registrationdate } = formData;
    if (!name ||  !email ||!nic || !phoneNumber || !address || !registrationdate ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    
    if (!validateEmail(email)) {
      setErrorMessage("Please provide a valid email address.");
      return false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage("Please provide a valid 10-digit phone number.");
      return false;
    }

    // Ensure the registration date is not in the future
  const currentDate = getCurrentDate();
  if (registrationdate > currentDate) {
    setErrorMessage("Please select a date not in the future.");
    return false;
  }
  

  };

  const validateEmail = (email) => {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    // Ensure month and day are formatted with leading zeros if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  };



  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Add Customer
        </h2>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              NIC:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
              min="18"
              required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sales Assistant:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="salesassistant"
              value={formData.salesassistant}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="SA01">SA01</option>
              <option value="SA02">SA02</option>
              <option value="SA03">SA03</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Registration date:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="registrationdate"
              value={formData.registrationdate}
              onChange={handleChange}
              required
            />
          </div>
          <div class="grid grid-cols-3 gap-4">
  <div>
  </div>
</div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Customer
          </button>
          <button
            onClick={() => navigate("/cus")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCustomer;
