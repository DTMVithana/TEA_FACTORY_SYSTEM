import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Sidebar from "./Sidebar";
import Layout from "../pages/FLayout";

const AddBill = () => {
  const [formData, setFormData] = useState({
    payId: "",
    billNo: "",
    amount: "",
    date: "",
    section: "",
    type: "",
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
        // Send POST request to backend API to add new payment
        await axios.post("http://localhost:3000/api/v1/bills/addBp", formData);
        setSuccessMessage("Bill payment added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          payId: "",
          billNo: "",
          amount: "",
          date: "",
          section: "",
          type: "",
        });
      } catch (error) {
        console.error("Error adding payment:", error);
        setErrorMessage("Error adding payment. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  const validateForm = () => {
    const {
      payId,
      billNo,
      amount,
      date,
      section,
      type,
    } = formData;
    if (
      !payId ||
      !billNo||
      !amount ||
      !date ||
      !section ||
      !type
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    /*if (isNaN(amount) || amount <= 0) {
      setErrorMessage("Please provide a valid value.");
      return false;
    } */

    // Add more validation rules as needed
    return true;
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-500 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add New Bill payment</h2>
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
              Payment ID:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="payId"
              value={formData.payId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bill No:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="billNo"
              value={formData.billNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Amount:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Section:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="section"
              value={formData.section}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Type:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="other">other</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Payment
          </button>
          <button
            onClick={() => navigate("/Bp")}
            className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddBill;
