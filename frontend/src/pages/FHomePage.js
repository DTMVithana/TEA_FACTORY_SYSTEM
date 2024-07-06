import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";

const FHomePage = () => {
  return (
    <div className="home">
    <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-6xl font-semibold mb-4">
        Batuwangala Tea Factory
    </h1>
      <h2 className="text-3xl font-semibold mb-4">
        Finance Management System
      </h2>
      <p className="text-lg text-black-100 mb-8">
        Welcome to the Finance Management System. Manage your finance process with
        ease!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Link
            to="/add-Sal">
        <div className="bg-green-300 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Add Salary Payment</h2>
          <p className="text-gray-600">
            Add a salary payment to the system. Enter their details and save.
          </p>
        </div>
        </Link>
        <Link
            to="/Sal">
        <div className="bg-green-300 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">View Salary Payments</h2>
          <p className="text-gray-600">
            View the list of all payments currently registered in the system.
          </p>
        </div>
        </Link>
        
        <Link
            to="/Bp">
        <div className="bg-green-300 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Manage Payments</h2>
          <p className="text-gray-600">
            Add a new bill payments to the system. Enter their details and save.
          </p>
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default FHomePage;
