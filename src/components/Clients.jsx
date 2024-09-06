import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import apis from "../apis/Apis";
import { client } from "../utils/DataUtils";

const Clients = ({ id }) => {  
  console.log(client)
  return (
    <section id={id} className="bg-white p-12 md:px-20">
      <Swiper
        spaceBetween={20}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        
        <SwiperSlide>
          <img
            src={require("../images/Company1.jpg")}
            alt="Company"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <img
            src={require("../images/Company2.jpg")}
            alt="Company"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <img
            src={require("../images/Company3.png")}
            alt="Company"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <img
            src={require("../images/Company4.jpg")}
            alt="Company"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide> 
        <SwiperSlide>
          <img
            src={require("../images/Company5.png")}
            alt="Company"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide> 
        
      </Swiper>
    </section>
  );
};

export default Clients;
