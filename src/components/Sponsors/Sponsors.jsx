import React from "react";

import ieee from "../../assets/SponsorLogos/titleSponsors/ieee.png";
import reva from "../../assets/SponsorLogos/titleSponsors/reva.png";
import sponsorbg from "../../assets/sponsorBg.png";
import "./Sponsers.css";
import SponsorBox from "./SponsorBox";
const treelogos = [
  { logo: reva, alt: "sad" },
  { logo: ieee, alt: "sad" },
  { logo: reva, alt: "sad" },
];

const saplinglogos = [
  { logo: reva, alt: "sad" },
  { logo: ieee, alt: "sad" },
  { logo: reva, alt: "sad" },
];


const Sponsors = () => {
  return (
    <section
      id="Sponsors"

      className="flex-col text-white text-3xl w-full h-screen flex items-center justify-center my-5"
    >
      <img className="absolute mt-[10%] " src={sponsorbg} />
      <div className="text-LushGreen  text-6xl md:text-7xl font-roboto font-bold ">
        Sponsors
      </div>

      <p className="  text-xs md:text-sm sm:text-xs text-secondary drop-shadow-lg shadow-secondary text-center font-light tracking-wider my-[10px]">
        Interested in Sponsoring? <br />
        Contact us at{" "}
        <a
          className="text-RoyalPurple underline"
          href="mailto:something@email.com"
        >
          revahack@reva.edu.in
        </a>
      </p>

      <div className=" font-[600] md:mt-[10px]  mb-[2%] text-xl md:text-2xl">
        Title Sponsors
      </div>
      <div className="flex justify-center gap-10  ">
        <div className=" title-sponsor glassmorphic flex items-center  ">
          <img src={reva} alt="title sponsor reva logo" />
        </div>
        <div className="title-sponsor glassmorphic flex items-center ">
          <img classname="" src={ieee} alt="title sponsor ieee logo" />
        </div>
      </div>

      {/* tree section */}
      <div className=" font-[600] my-[2%] text-xl md:text-2xl">Tree</div>
      <div className="slider">
        <div className="slide-track">
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
        </div>
      </div>
      <div className="slider2">
        <div className="slide-track2">
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[2].alt} />
        </div>
      </div>

      {/* sapling section */}

      <div className=" font-[600] my-[2%] text-xl md:text-2xl">Sapling</div>
      <div className="slider">
        <div className="slide-track">
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
        </div>
      </div>
      <div className="slider2">
        <div className="slide-track2">
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
        </div>
      </div>

    </section>
  );
};

export default Sponsors;
