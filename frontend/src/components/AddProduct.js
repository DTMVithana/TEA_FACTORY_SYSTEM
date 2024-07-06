import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/PLayout";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name:"",
    batchNo: "",
    categoryNo: "",
    MDate: "",
    EDate: "",
    qty: "",
    quality: "",
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
        // Send POST request to backend API to add new production stock
        await axios.post(
          "http://localhost:3000/api/v1/products/addPro",
          formData
        );
        setSuccessMessage("Stock added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          name:"",
          batchNo: "",
          categoryNo: "",
          MDate: "",
          EDate: "",
          qty: "",
          quality: "",
        });
      } catch (error) {
        console.error("Error adding stock:", error);
        setErrorMessage("Error adding stock. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  const validateForm = () => {
    const { name,batchNo, categoryNo, MDate, EDate, qty, quality } = formData;
    if (!name || !batchNo || !categoryNo || !MDate || !EDate || !qty || !quality) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    
    if (isNaN(qty) || qty <= 0) {
      setErrorMessage("Please provide a valid quantity.");
      return false;
    }
    // Add more validation rules as needed
    return true;
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 transparent rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Add Production Stock
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
            <label className="block text-black-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Batch No:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="batchNo"
              value={formData.batchNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              categoryNo:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="categoryNo"
              value={formData.categoryNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Manufactured Date:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="MDate"
              value={formData.MDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Expiration Date:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="EDate"
              value={formData.EDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Quantity:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="qty"
              value={formData.qty}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 text-sm font-bold mb-2">
              Quality:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="quality"
              value={formData.quality}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Production stock
          </button>
          <button
            onClick={() => navigate("/Pro")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
