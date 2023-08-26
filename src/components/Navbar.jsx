// src/components/Navbar.js

import React, { useState } from "react";
import logo from "../assets/asp.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-zinc-50 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="ml-14">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          </Link>
          <Link to="/" className=" text-gray-400 text-2xl ml-3">
           | Blog
          </Link>
        </div>
        <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:space-x-4"></div>
        <div className="ml-2 md:ml-0">
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none"
          >
            <img
              src={logo}
              alt="Profile"
              className="w-10 mr-14 h-10 rounded-full cursor-pointer"
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border rounded-lg shadow-lg">
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                <Link to="/login">Log In</Link>
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                <Link to="/register">Register</Link>
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                <Link to="/">New Blog</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
