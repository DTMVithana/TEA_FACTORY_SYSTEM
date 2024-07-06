import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 flex">
      <div className="w-1/5 bg-gray-900 h-screen">
        <ul className="p-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 block py-2">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 block py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 block py-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-4/5 p-4">{/* Content */}</div>
    </nav>
  );
};

export default NavBar;
