import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";

const IHomePage = () => {
  return (
    <div className="home">
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-6xl font-semibold mb-4">
        Batuwangala Tea Factory
    </h1>
      <h2 className="text-3xl font-semibold mb-4">
        Inventory Management System
      </h2>
      <p className="text-lg text-black-600 mb-8">
        Welcome to the Inventory Management System. Manage your stock with
        ease!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
            to="/add-It"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add Item</h2>
          <p className="text-gray-600">
            Add a new item to the system. Enter  details and save.
          </p>
        </div>
      </Link>
      <Link
            to="/it"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Items</h2>
          <p className="text-gray-600">
            View the list of all items currently in the system.
          </p>
        </div>
        </Link>
        <Link
            to="/tr"
          >
        <div className="bg-green-400 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Transactions</h2>
          <p className="text-gray-600">
            Manage items. Approve or reject item
            applications.
          </p>
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default IHomePage;
