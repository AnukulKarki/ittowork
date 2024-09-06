import React, { useEffect, useState } from "react";
import Cloud from "../images/Cloud.png";
import Web from "../images/web.png";
import Seo from "../images/SEO.png";

const Service = ({ id }) => {
  return (
    <section id={id} className="bg-white px-12 md:px-20 pb-[10vh] pt-[5vh]">
      <div className="md:h-1/2 text-center">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <p className="text-gray-600 mt-4">
          At ITTO Work, we build robust IT frameworks that drive your growth,
          ensuring security, efficiency, and unwavering support.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 space-y-8 md:space-y-0 md:space-x-8">
          <div className="text-center">
            <div className="rounded-full inline-block">
              <img src={Cloud} alt="" />
            </div>
            <h3 className="text-xl font-bold text-black mt-4">Cloud Hosting</h3>
            <p className="text-gray-600 mt-2">
              Harness the cloud's potential with our cutting-edge cloud hosting.
            </p>
            <a
              href="/"
              className="text-blue-800 font-semibold mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>

          <div className="text-center">
            <div className="rounded-full inline-block">
              <img src={Web} alt="" />
            </div>
            <h3 className="text-xl font-bold text-black mt-4">
              Web Development
            </h3>
            <p className="text-gray-600 mt-2">
              Transforming ideas into dynamic web experiences.
            </p>
            <a
              href="/"
              className="text-blue-800 font-semibold mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>

          <div className="text-center">
            <div className="rounded-full inline-block">
              <img src={Seo} alt="" />
            </div>
            <h3 className="text-xl font-bold text-black mt-4">
              Seo & Content Creation
            </h3>
            <p className="text-gray-600 mt-2">
              Crafting compelling content and optimizing your presence.
            </p>
            <a
              href="/"
              className="text-blue-800 font-semibold mt-4 inline-block"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
