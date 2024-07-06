import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/TrLayout";

const AddVehicledetail = () => {
  const [formData, setFormData] = useState({
    transportId: "",
    vehicleRId: "",
    date: "",
    vehicleType: "",
    vehicleBrand: "",
    mileage: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //validation
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value; // Initialize newValue to the current value

    

    // Validate date field to prevent future dates
    if (name === "date") {
      const selectedDate = new Date(value);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        // If selected date is in the future, set it to current date
        newValue = formatDate(currentDate); // You need to define formatDate function
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send POST request to backend API to add new employee
        await axios.post(
          "http://localhost:3000/api/v1/vehicles/addVdt",
          formData
        );
        setSuccessMessage("Vehicle datil added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          transportId: "",
          vehicleRId: "",
          date: "",
          vehicleType: "",
          vehicleBrand: "",
          mileage: "",

        });
      } catch (error) {
        console.error("Error adding Vehicledetail:", error);
        setErrorMessage("Error adding Vehicledetail. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  const validateForm = () => {
    const { transportId, vehicleRId, date, vehicleType, vehicleBrand, mileage } = formData;
    if (!transportId || !vehicleRId|| !date || !vehicleType || !vehicleBrand || !mileage) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    return true;
  };

  return (
    <Layout>
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-200 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Add Vehicle Detail
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
            Transport ID:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="transportId"
            value={formData.transportId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
           Vehicle Registration Id:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="vehicleRId"
            value={formData.vehicleRId}
            onChange={handleChange}
            required
            min="18"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            date:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            max={formatDate(new Date())} //validation
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Vehicle Type:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Vehicle Brand:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="vehicleBrand"
            value={formData.vehicleBrand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Mileage:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="mileage"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
        </div>
        
        <button
          
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
        
          Add Vehicle Detail
        </button>
        <button
          onClick={() => navigate("/trans")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >

          Back to home
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default AddVehicledetail;
