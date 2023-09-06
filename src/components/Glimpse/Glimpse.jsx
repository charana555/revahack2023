import React, { useRef, useState } from "react";
// Import Swiper React components
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import {
//   Autoplay,
//   Keyboard,
//   Mousewheel,
//   Navigation,
//   Pagination,
//   Scrollbar,
// } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "./Glimpse.css";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Glimpse = (props) => {
  return (
    <>
      <section className=" flex flex-col justify-center pb-28 ">
        <div className="text-white font-bold text-5xl md:text-7xl text-center  mb-[50px] ">
          <span className="text-RoyalPurple">REVA Hack 2022</span> Glimpse
        </div>

        {/* <Swiper
          // cssMode={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
          // loop={true}
          modules={[Pagination, Autoplay, Mousewheel]}
          className="mySwiper2"
        >
          <SwiperSlide className="slide2">Slide 1</SwiperSlide>
          <SwiperSlide className="slide2">Slide 2</SwiperSlide>
          <SwiperSlide className="slide2">Slide 3</SwiperSlide>
          <SwiperSlide className="slide2">Slide 4</SwiperSlide>
          <SwiperSlide className="slide2">Slide 5</SwiperSlide>
          <SwiperSlide className="slide2">Slide 6</SwiperSlide>
        </Swiper> */}

        <Splide
          hasTrack={false}
          options={{
            drag: "free",
            perPage: 3.5,
            breakpoints: {
              600: {
                perPage: 1,
              },
              1200: {
                perPage: 3,
              },
              1000: {
                perPage: 2,
              },
            },
            perMove: 1,
            width: "100%",
            type: "loop",
            gap: "2rem",
            autoplay: true,
            interval: 3000,
            classes: {
              // Add classes for arrows.
              // Add classes for pagination.
              pagination: "splide__pagination glimpses__pagination", // container
              page: "splide__pagination__page glimpses__pagination__page", // each button
            },
          }}
        >
          <SplideTrack>
            <SplideSlide className="glimpse-slide"> </SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
            <SplideSlide className="glimpse-slide">...</SplideSlide>
          </SplideTrack>
        </Splide>
      </section>
    </>
  );
};

export default Glimpse;
