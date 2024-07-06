import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";

const CHomePage = () => {
  return (
    <div className="home">
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">
        Customer Management System
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to the Customer Management System. Manage your customers with
        ease!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
            to="/add-cus"
          >
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add Customer</h2>
          <p className="text-gray-600">
            Add a new customer to the system. Enter their details and save.
          </p>
        </div>
        </Link>
        <Link
            to="/cus-ls"
          >
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Customers</h2>
          <p className="text-gray-600">
            View the list of all customers currently registered in the system.
          </p>
        </div>
        </Link>
        <Link
            to="/ord-ls"
          >
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
          <p className="text-gray-600">
            Manage the orders of customers.
          </p>
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default CHomePage;
