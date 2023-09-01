import React from "react";
import Logo from "../Assets/Images/Screenshot 2023-08-31 at 1.09.28 PM.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// <FontAwesomeIcon icon={faSearch} />;

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-2">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="text-white font-semibold">
          <img src={Logo} alt="" srcset="" className="w-32 h-32" />
        </div>
        <ul className="text-white text-lg flex flex-row gap-4 ">
          <button
            type="button"
            className="py-4 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <li>
              <a href="#home">LOGIN</a>
            </li>
          </button>
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            <li>
              <a href="#about">SIGNUP</a>
            </li>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
