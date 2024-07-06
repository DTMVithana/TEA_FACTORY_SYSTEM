import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../pages/TrLayout";

const AddTransport = () => {
  const [formData, setFormData] = useState({
    TransportId: "",
    vehicleRegNo: "",
    date: "",
    driverName: "",
    discription: "",
    status: "",
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

    // Validate driverName and discription fields using regex
    if (name === "driverName" || name === "discription") {
      // Allow only letters and spaces in the input
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    // Validate date field to prevent future dates
    if (name === "date") {
      const selectedDate = new Date(value);
      const currentDate = new Date();

      if (selectedDate > currentDate) {
        // If selected date is in the future, set it to current date
        newValue = formatDate(currentDate); // You need to define formatDate function
      }
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend API to add new transport details

      console.log(formData);

      await axios.post(
        "http://localhost:3000/api/v1/transports/addTr",
        formData
      );
      setSuccessMessage("Transport details added successfully.");
      setErrorMessage("");
      // Clear form fields after successful submission
      setFormData({
        TransportId: "",
        vehicleRegNo: "",
        date: "",
        driverName: "",
        discription: "",
        status: "",
      });
    } catch (error) {
      console.error("Error adding transport details:", error);
      setErrorMessage(
        "Error adding transport details. Please try again later."
      );
      setSuccessMessage("");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-200 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Add Transport Details
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
:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="Transport ID:
"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="T001">T001</option>
              <option value="T002">T002</option>
              <option value="T003">T003</option>
              <option value="T004">T004</option>
              <option value="T005">T005</option>
              <option value="T006">T006</option>
              <option value="T007">T007</option>
              <option value="T008">T008</option>
              <option value="T009">T009</option>
              <option value="T010">T010</option>
              <option value="T011">T011</option>
              <option value="T012">T012</option>
              <option value="T013">T013</option>
              <option value="T014">T014</option>
              <option value="T015">T015</option>
              <option value="T016">T017</option>
              <option value="T018">T018</option>
              <option value="T019">T019</option>
              <option value="T020">T020</option>
              <option value="T021">T021</option>
              <option value="T022">T022</option>
              <option value="T022">T022</option>
              <option value="T023">T023</option>
              <option value="T024">T024</option>
              
              
              
              
              

            </select>
          </div>



          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Vehicle Registration No:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="vehicleRegNo"
              value={formData.vehicleRegNo}
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
              Driver Name:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Discription:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="discription"
              value={formData.discription}
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
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              

            </select>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Details
          </button>
          <button
            onClick={() => navigate("/Trans")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Back to home
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddTransport;
