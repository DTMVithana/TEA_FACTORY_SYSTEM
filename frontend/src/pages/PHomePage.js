import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";

const PHomePage = () => {
  return (
    <div className="home">
    <div className="h-screen  flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4">
        Production Management System
      </h1>
      <p className="text-lg text-black-600 mb-8">
        Welcome to the Production Management System. Manage your production process with
        ease!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
            to="/add-Pro"
          >
        <div className="bg-green-600 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Add Production Stock</h2>
          <p className="text-black-600">
            Add a new stock to the system. Enter their details and save.
          </p>
        </div>
        </Link>
        <Link
            to="/Pro"
          >
        <div className="bg-green-600 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">View Production Stock</h2>
          <p className="text-black-600">
            View the list of all stocks currently registered in the system.
          </p>
        </div>
        </Link>
        <Link
            to="/Cg"
          >
        <div className="bg-green-600 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Manage Category Details</h2>
          <p className="text-black-600">
            Add, Update, remove and view category details of products to the system. Enter their details and save.
          </p>
        </div>
        </Link> 
      </div>
    </div>
    </div>
  );
};

export default PHomePage;
