import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Layout from "../pages/ILayout";



const AddTransaction = () => {
  const [formData, setFormData] = useState({
    tno: generatetno(),
    sid: "",
    unitPrice: "",
    quantity: "",
    description: "",
    category: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send POST request to backend API to add new transaction
        await axios.post("http://localhost:3000/api/v1/transactions/addTr", formData);
        setSuccessMessage("Transaction added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          tno: generatetno(),
          sid: "",
          unitPrice: "",
          quantity: "",
          description: "",
          category: "",
        });
      } catch (error) {
        console.error("Error adding transaction:", error);
        setErrorMessage("Error adding transaction. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  //validation

  const validateForm = () => {
    const {
      tno,
      sid,
      unitPrice,
      quantity,
      description,
      category,
    } = formData;
    if (
      !tno ||
      !sid ||
      !unitPrice ||
      !quantity ||
      !description ||
      !category
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (isNaN(quantity) || quantity <= 0) {
      setErrorMessage("Please provide a valid value.");
      return false;
    }

    // Add more validation rules as needed
    return true;
  };

//create function to genatre ID

function generatetno(){
  return `T${Math.floor(Math.random()*1000)}`;
}


  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add Transaction</h2>
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
              Tno:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="tno"
              value={formData.tno}
              onChange={handleChange}
              readOnly
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sid:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="sid"
              value={formData.sid}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="S001">S001</option>
              <option value="S002">S002</option>
              <option value="S003">S003</option>
              <option value="S004">S004</option>
              <option value="S005">S005</option>
              <option value="S006">S006</option>
              <option value="S007">S007</option>
              <option value="S008">S008</option>
              <option value="S009">S009</option>
              <option value="S0010">S0010</option>
              
            </select>
          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UnitPrice:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              category:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="sale">sale</option>
              <option value="scrap">scrap</option>
              <option value="assembly">assembly</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Item
          </button>
          <button
            onClick={() => navigate("/tr")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddTransaction;