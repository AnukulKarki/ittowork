import React from "react";
import HomeIllustration from "../images/LandingPageImage.png";
import Project from "../images/project.png";
import Clients from "../images/client.png";

const Home = () => {
  return (
    <section className="bg-[#EAF3FF] px-12 md:px-20 flex flex-col md:flex-row items-center h-[85vh]">
      <div className="md:w-1/2">
        <p className="text-gray-500 italic">Your Partner In Progress...</p>
        <h1 className="text-4xl font-bold text-black mt-2">
          Empowering Projects with
          <br />
          <span className="text-[#01318D]">Precision and Excellence</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Achieve More with Expert Project Management and IT Services. Need to
          elevate your operations? Let ITTO Work be your catalyst for growth.
        </p>
        <div className="flex mt-6 space-x-8">
          <div className="flex items-center">
            <div className="rounded-full">
              <img src={Project} alt="" />
            </div>
            <div className="ml-4">
              <p className="text-black font-bold text-lg">25+</p>
              <p className="text-gray-600">Projects</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full">
              <img src={Clients} alt="" />
            </div>
            <div className="ml-4">
              <p className="text-black font-bold text-lg">25+</p>
              <p className="text-gray-600">Clients</p>
            </div>
          </div>
        </div>
        <div className="flex mt-8 space-x-4">
          <button className="bg-[#193053] hover:bg-[#074497] text-white px-9 py-3  rounded-md">
            Know Us
          </button>
          <button className="border border-[#193053] text-[#193053] px-9 py-3 rounded-md">
            Projects
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={HomeIllustration}
          alt="Illustration"
          className="hidden md:block w-100 h-100"
        />
      </div>
    </section>
  );
};

export default Home;
