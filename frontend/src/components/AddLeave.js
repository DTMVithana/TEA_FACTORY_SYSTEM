import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Layout from "../pages/Layout";

const AddLeave = () => {
  const [formData, setFormData] = useState({
    leaveNo: "",
    leaveStatus: "",
    description: "",
    noOfDates: "",
    memberName: "",
    category: "",
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
        // Send POST request to backend API to add new employee
        await axios.post("http://localhost:3000/api/v1/leaves/addLv", formData);
        setSuccessMessage("Leave added successfully.");
        setErrorMessage("");
        // Clear form fields after successful submission
        setFormData({
          leaveNo: "",
          leaveStatus: "",
          description: "",
          noOfDates: "",
          memberName: "",
          category: "",
        });
      } catch (error) {
        console.error("Error adding leave:", error);
        setErrorMessage("Error adding leave. Please try again later.");
        setSuccessMessage("");
      }
    }
  };

  //methanin nawaththuwe bro

  const validateForm = () => {
    const {
      leaveNo,
      leaveStatus,
      description,
      noOfDates,
      memberName,
      category,
    } = formData;
    if (
      !leaveNo ||
      !leaveStatus ||
      !description ||
      !noOfDates ||
      !memberName ||
      !category
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }
    if (isNaN(noOfDates) || noOfDates <= 0) {
      setErrorMessage("Please provide a valid value.");
      return false;
    }

    // Add more validation rules as needed
    return true;
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-200 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Add Leave</h2>
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
              LeaveNo:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="leaveNo"
              value={formData.leaveNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LeaveStatus:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="leaveStatus"
              value={formData.leaveStatus}
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
              No of Dates:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="noOfDates"
              value={formData.noOfDates}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Member name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="memberName"
              value={formData.memberName}
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
              <option value="Sick Leave">Male</option>
              <option value="Casual Leave">Female</option>
              <option value="Annual Leave">Other</option>
            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Leave
          </button>
          <button
            onClick={() => navigate("/lv")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddLeave;
