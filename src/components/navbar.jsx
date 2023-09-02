import React from "react";
import Logo from "../Assets/Images/Screenshot 2023-08-31 at 1.09.28 PM.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-full h-38 leading-[80px] bg-neutral-300 gap-2 py-2 flex items-center">
      <div className="Logo container mx-auto flex flex-row justify-between items-center">
        <div className="text-white font-semibold">
          {/* Logo */}
          <a href="">
            <h1
              className="font-sans
 text-smallTextColor font-bold hover:text-headingColor text-[1.8rem]"
            >
              JOEL MATHEW
            </h1>
          </a>
        </div>

        {/* Menu */}
        <div className="menu flex flex-row space-x-4 justify-between items-center">
          <ul className="flex flex-row items-center justify-between gap-8 text-smallTextColor font-semibold text-xl">
            <li className="hover:text-blue-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#service">Service</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="contact">Contact</a>
            </li>
          </ul>
          {/* Button */}
          <div className="Button flex items-center gap-4 text-xl">
            <button className="transition p-4 duration-200 ease-in-out hover:bg-smallTextColor w-32 h-12 text-smallTextColor font-semibold hover:text-white py-0 px-0 border border-smallTextColor hover:border-transparent rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
              <span className="ml-2 font-sans">Let's Talk</span>
            </button>
          </div>
          {/* Menu Icon */}
          <button className="menu-icon text-xl text-smallTextColor hover:text-blue-500 md:hidden sm:block">
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
