import React, { useRef, useState } from "react";
// Import Swiper React components
import {
  Autoplay,
  Keyboard,
  Mousewheel,
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
          cssMode={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          mousewheel={true}
          keyboard={true}
          modules={[Pagination, Autoplay, Mousewheel]}
          className="mySwiper2"
        >
          <SwiperSlide className="slide2">Slide 1</SwiperSlide>
          <SwiperSlide className="slide2">Slide 2</SwiperSlide>
          <SwiperSlide className="slide2">Slide 3</SwiperSlide>
          <SwiperSlide className="slide2">Slide 4</SwiperSlide>
          <SwiperSlide className="slide2">Slide 5</SwiperSlide>
          <SwiperSlide className="slide2">Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Glimpse;
