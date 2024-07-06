import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/ILayout";

const AddItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    id: generateId(),
    level: "",
    quantity: "",
    description: "",
    status: "",
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
        // Send POST request to backend API to add new item
        await axios.post(
          "http://localhost:3000/api/v1/items/addIt",
          formData
        );
        setSuccessMessage("Item added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          id: generateId(),
          level: "",
          quantity: "",
          description: "",
          status: "",
        });
      } catch (error) {
        console.error("Error adding item:", error);
        setErrorMessage("Error adding item. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  const validateForm = () => {
    const { name, id, level, quantity, description, status } = formData;
    if (!name || !id || !level || !quantity || !description || !status) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (isNaN(quantity) || quantity <= 0) {
      setErrorMessage("Please provide a valid quantity.");
      return false;
    }
 
    
    return true;
  };

  //create function to genatre ID

function generateId(){
  return `INV${Math.floor(Math.random()*1000)}`;
}

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Add Item
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Id:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              readOnly
              required
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Level:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="level"
              value={formData.level}
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
              Status:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="machinaryInv">machinary inventory</option>
              <option value="productInv">product inventory item</option>
              <option value="rawMaterialInv">rawMaterial</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Item
          </button>
          <button
            onClick={() => navigate("/it")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddItem;
