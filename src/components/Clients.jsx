import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Clients = ({ id }) => {
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
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 1"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EAF3FF/31343C/"
            alt="Client 2"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 3"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 4"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 4"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 4"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 4"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placehold.co/600x400/EEE/31343C/"
            alt="Client 4"
            className="w-full h-50 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Clients;
