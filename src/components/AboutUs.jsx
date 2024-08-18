import React from "react";
import AboutUsIllustration from "../images/AboutUsImage.png";

const AboutUs = () => {
  return (
    <section className="bg-white px-12 md:px-20 mb-10">
      <div className=" md:h-1/2 flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={AboutUsIllustration}
            alt="About Us Illustration"
            className="w-85 h-85"
          />
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-black">About Us</h2>
          <p className="text-black-600 mt-4">
            ITTOWORK Providing service since 2024
          </p>
          <p className="text-gray-600 mt-4 text-justify">
            At ITTOWork, we specialize in crafting high-performance web
            applications tailored to your business needs. As an industry-leading
            IT outsourcing company, we bring together top-tier developers,
            cutting-edge technologies, and a client-focused approach to deliver
            custom web solutions that drive your business forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
