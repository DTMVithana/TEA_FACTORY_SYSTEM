import React from "react";
import { Link } from "react-router-dom";
import "../styles/LayoutStyles.css";

const HomePage = () => {
  return (

  <div className="home">
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-6xl font-semibold mb-4">
        Batuwangala Tea Factory
    </h1>
      <h1 className="text-3xl font-semibold mb-4">
        Employee Management System
      </h1>
      <p className="text-lg text-black-600 mb-8">
        Welcome to the Employee Management System. Manage your employees with
        ease!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link
            to="/add-emp"
          >
        <div className="bg-green-500 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add Employee</h2>
          <p className="text-black-600">
            Add a new employee to the system. Enter their details and save.
          </p>
        </div>
        </Link>

        <Link
            to="/emp"
          >
        <div className="bg-green-500 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">View Employees</h2>
          <p className="text-black-600">
            View the list of all employees currently registered in the system.
          </p>
        </div>
        </Link>
        <Link
            to="/lv"
          >
        <div className="bg-green-500 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Leaves</h2>
          <p className="text-black-600">
            Manage leave requests of employees. Approve or reject leave
            applications.
          </p>
        </div>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default HomePage;
