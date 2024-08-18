import React from "react";
import Logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#EAF3FF] flex justify-between items-center px-10 h-[15vh]">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-full h-8" />
      </div>
      <div className="flex space-x-8">
        <a href="/" className="text-gray-600 hover:text-black">
          About
        </a>
        <a href="/" className="text-gray-600 hover:text-black">
          Services
        </a>
        <a href="/" className="text-gray-600 hover:text-black">
          Pricing
        </a>
      </div>
      <div>
        <a href="/" className="text-gray-600 hover:text-black">
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
