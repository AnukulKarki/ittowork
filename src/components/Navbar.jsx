import React, { useState } from "react";
import Logo from "../images/Logo.png";
import MenuIcon from "../images/Hamburger.png"; // Custom Menu icon

const Navbar = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      id={id}
      className="bg-[#EAF3FF] flex justify-between items-center px-6 md:px-10 py-4 md:py-6 relative h-[10vh]"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="#home" onClick={closeMenu}>
          <img src={Logo} alt="logo" className="w-auto h-10 md:h-12" />
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2">
          <img src={MenuIcon} alt="menu icon" className="w-8 h-8" />
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#EAF3FF] md:bg-transparent border-t md:border-0 border-gray-200 p-4 md:p-0 shadow-lg rounded-lg md:shadow-none`}
      >
        <a
          href="#about"
          className="block text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          href="#services"
          className="block text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#pricing"
          className="block text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={closeMenu}
        >
          Pricing
        </a>
        <a
          href="#contact"
          className="block text-gray-700 hover:text-blue-600 py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={closeMenu}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
