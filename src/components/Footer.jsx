import React from "react";
import Location from "../images/location.png";
import Call from "../images/call.png";
import Mail from "../images/mail.png";

const Footer = () => {
  return (
    <footer className="bg-[#EAF3FF] p-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:text-left text-center space-y-6">
          <h2 className="text-2xl font-bold text-blue-900">ITTOWORK</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            At ITTOWork, we specialize in crafting high-performance web
            applications tailored to your business needs. Our experienced
            developers, cutting-edge technology, and client-focused approach
            deliver custom web solutions that drive your business forward.
          </p>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold text-blue-900">Quick Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-800">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-800">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-800">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-800">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right text-center space-y-6">
          <h3 className="text-xl font-semibold text-blue-900">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex md:justify-end justify-center items-center text-gray-700 hover:text-blue-800">
              <img src={Location} alt="Location" className="h-5 mr-2" />
              Kamalpokhari, Kathmandu, Nepal
            </li>
            <li className="flex md:justify-end justify-center items-center text-gray-700 hover:text-blue-800">
              <img src={Call} alt="Call" className="h-5 mr-2" />
              01-5970012, 9801000400
            </li>
            <li className="flex md:justify-end justify-center items-center text-gray-700 hover:text-blue-800">
              <img src={Mail} alt="Mail" className="h-5 mr-2" />
              ittowork@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600 border-t pt-6">
        © 2024 All rights reserved - ITTOWORK
      </div>
    </footer>
  );
};

export default Footer;
