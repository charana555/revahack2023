import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperStyles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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

  return (
    <section
      id="Crew"
      className="flex-col text-white text-3xl w-full h-auto flex items-center justify-center crew-bg fadeeffect"

    >
      <Swiper
        lazy={true}
        spaceBetween={30}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {teams.map((team, index) => (
          <SwiperSlide key={index}>
            <Slide team={team} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
};

export default Crew;
