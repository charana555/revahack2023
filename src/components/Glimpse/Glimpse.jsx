import React, { useRef, useState } from "react";
// Import Swiper React components
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Glimpse.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Glimpse = (props) => {
  return (
    <>
      <div className=" flex flex-col justify-center  ">
        <div className="text-white font-bold text-5xl md:text-7xl text-center  mb-[50px] ">
          <span className="text-RoyalPurple">REVA Hack 2022</span> Glimpse
        </div>

        <Swiper
          speed={5000}
          autoplay={{
            delay: 0.1,
            disableOnInteraction: false,
          }}
          loop={true}
          // install Swiper modules
          modules={[
            Keyboard,
            Autoplay,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
          ]}
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          // centeredSlides={true}
          className="mySwiper2"
          keyboard={{
            enabled: true,
          }}
        >
          <SwiperSlide className="slide2">Slide 1</SwiperSlide>
          <SwiperSlide className="slide2">Slide 2</SwiperSlide>
          <SwiperSlide className="slide2">Slide 3</SwiperSlide>
          <SwiperSlide className="slide2">Slide 4</SwiperSlide>
          <SwiperSlide className="slide2">Slide 5</SwiperSlide>
          <SwiperSlide className="slide2">Slide 6</SwiperSlide>
          <SwiperSlide className="slide2">Slide 7</SwiperSlide>
          <SwiperSlide className="slide2">Slide 8</SwiperSlide>
          <SwiperSlide className="slide2">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Glimpse;
