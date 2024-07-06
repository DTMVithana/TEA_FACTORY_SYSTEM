import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";


const TrHomePage = () => {
  return (
    <div className="home">
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">
        Transport Management System
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to the Transport Management System. Manage your transport process with
        ease!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
            to="/add-Trans"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add Transport Details</h2>
          <p className="text-gray-600">
            Add transport details to the system. Enter their details and save.
          </p>
        </div>
        </Link>
        <Link
            to="/Trans"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Transport Details</h2>
          <p className="text-gray-600">
            View the list of all transpot details currently registered in the system.
          </p>
        </div>
        </Link>
        <Link
            to="/Vdt"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Vehicle Details</h2>
          <p className="text-gray-600">
            Add, update and view vehicle details to the system. Enter their details and save.
          </p>
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default TrHomePage;
