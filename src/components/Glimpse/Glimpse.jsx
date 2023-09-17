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

import glimpse11 from "./GlimpsesPhotos/min/gimplse11.webp";
import glimpse1 from "./GlimpsesPhotos/min/glimpse1.webp";
import glimpse10 from "./GlimpsesPhotos/min/glimpse10.webp";
import glimpse12 from "./GlimpsesPhotos/min/glimpse12.webp";
import glimpse2 from "./GlimpsesPhotos/min/glimpse2.webp";
import glimpse3 from "./GlimpsesPhotos/min/glimpse3.webp";
import glimpse4 from "./GlimpsesPhotos/min/glimpse4.webp";
import glimpse5 from "./GlimpsesPhotos/min/glimpse5.webp";
import glimpse6 from "./GlimpsesPhotos/min/glimpse6.webp";
import glimpse7 from "./GlimpsesPhotos/min/glimpse7.webp";
import glimpse8 from "./GlimpsesPhotos/min/glimpse8.webp";
import glimpse9 from "./GlimpsesPhotos/min/glimpse9.webp";

const Glimpse = (props) => {
  return (
    <>
      <section className=" flex flex-col justify-center pb-28 ">
        <div className="text-white font-bold text-[50px] md:text-[72px] text-center  mb-[50px] ">
          <span className="text-RoyalPurple">REVA HACK 2022</span> Glimpse
        </div>

        <div className="splide-container">
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
              arrows: false,
              classes: {
                // Add classes for arrows.
                // Add classes for pagination.
                pagination: "splide__pagination glimpses__pagination", // container
                page: "splide__pagination__page glimpses__pagination__page", // each button
              },
            }}
          >
            <SplideTrack>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse1}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse2}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse3}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse4}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse5}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse6}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse7}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse8}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse9}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse10}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse11}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
              <SplideSlide className="glimpse-slide">
                <img
                  src={glimpse12}
                  loading="lazy"
                  alt="revahack 2022 glimpses"
                ></img>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Glimpse;
