import React from "react";
import Location from "../images/location.png";
import Call from "../images/call.png";

const Contact = ({ id }) => {
  return (
    <section id={id} className="bg-[#EAF3FF] p-12 md:px-20">
      <div className="flex flex-col text-center items-center">
        <h2 className="text-3xl font-bold text-black">
          Get in touch with us Us
        </h2>
        <p className="text-gray-600 my-6 w-full md:max-w-[50%]">
          We'd love to hear from you! Whether you have a specific enquiry or you
          just want to receive more information 
        </p>
      </div>

      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-8">
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Find Us</h3>
            <div className="flex items-center space-x-4 ">
              <img src={Location} alt="Location" className="h-6" />
              <p className="text-gray-800">Kamalpokhari, Kathmandu, Nepal</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src={Call} alt="Call" className="h-6" />
              <p className="text-gray-800">
                01-5970012, 9801000400, 9801000300
              </p>
            </div>
          </div>
          <p className="text-gray-600 text-justify">
            We are here to assist you. Feel free to send us any message by
            filling out the form or you can directly call us on our given number
            to discuss anything you have. We shall get back to you as soon as we
            receive your queries.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800">
            +01 9723215215
          </button>
        </div>

        <div className="space-y-3 bg-white  p-0 md: p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
              type="text"
              placeholder="Phone No."
            />
            <input
              className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
            type="text"
            placeholder="Subject"
          />

          <textarea
            className="border border-gray-300 p-3 w-full rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your message..."
            rows="5"
          ></textarea>

          <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
