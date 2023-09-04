import React, { useRef, useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import crewBg from "../../assets/crewbg.webp";
// import "./swiperStyles.css";

// // import required modules
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "@splidejs/react-splide/css";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "./Crew.css";
// import Card from "./components/Card";
import Slide from "./components/Slide";

const teams = [
  // organisin:

  {
    teamName: "Organising Crew",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  // Tech Team
  {
    teamName: "Technical Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "Charana",
      title: "Team Lead",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "Amogh",
      title: "Team Lead",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "Bhavika",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "Viraj",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "Dhyuti",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "Gayatri",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  // Design Team:
  {
    teamName: "Design Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  //  Query Team
  {
    teamName: "Query Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },

  //Spnsor Team
  {
    teamName: "Sponsor Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  // Curation
  {
    teamName: "Curation Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  // Marketting
  {
    teamName: "Marketting Team",
    lead1: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    lead2: {
      photo: "./src/assets/CrewPhotos/person2.png",
      name: "",
      title: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member1: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member2: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member3: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
    member4: {
      photo: "./src/assets/CrewPhotos/man.png",
      name: "",
      insta: "",
      github: "",
      linkedin: "",
    },
  },
  //
];

const Crew = () => {
  // swiper code
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const options = {
    type: "loop",

    autoplay: true,
  };

  return (
    <section
      id="Crew"
      className="flex-col text-white text-3xl w-full h-auto flex items-center justify-center crew-bg fadeeffect"
    >
      {/* <img src={crewBg} className="h-screen absolute" alt="" /> */}
      <Splide
        hasTrack={false}
        options={{
          width: "100%",
          type: "loop",
          autoplay: true,
          classes: {
            // Add classes for arrows.
            arrows: "splide__arrows your-class-arrows",
            arrow: "splide__arrow your-class-arrow",
            prev: "splide__arrow--prev your-class-prev",
            next: "splide__arrow--next your-class-next",

            // Add classes for pagination.
            pagination: "splide__pagination my__splide__pagination", // container
            page: "splide__pagination__page my__splide__pagination__page", // each button
          },
        }}
        aria-label="Crew"
      >
        <SplideTrack>
          {teams.map((team, index) => (
            <SplideSlide key={index}>
              <Slide team={team} />
            </SplideSlide>
          ))}

          {/* {this.state.slides.map((team, index) => (
            <SplideSlide key={index}>
              <Slide team={team} />
            </SplideSlide>
          ))} */}
        </SplideTrack>

        {/* 
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div> */}
      </Splide>
    </section>
  );
};

export default Crew;
