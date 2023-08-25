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

const Sponsers = () => {
  return (
    <section
      id="sponsers"
      className="bg-primary flex-col  text-white text-3xl w-full h-screen flex items-center justify-center px-[10%]"
    >
      <img className="absolute mt-[10%] " src={sponsorbg} />
      <div className="text-LushGreen mb-[2%] text-7xl md:text-8xl font-roboto font-bold ">
        Sponsors
      </div>

      <p className="  text-sm md:text-xl text-secondary drop-shadow-lg shadow-secondary text-center font-light tracking-wider mb-[2%]">
        Interested in Sponsoring? <br />
        Contact us at{" "}
        <a
          className="text-RoyalPurple underline"
          href="mailto:something@email.com"
        >
          revahack@reva.edu.in
        </a>
      </p>

      <div className=" font-[600] mt-[2%]  mb-[2%] text-3xl md:text-4xl">
        Title Sponsors
      </div>
      <div className="flex justify-center gap-10  ">
        <div className=" title-sponsor glassmorphic flex items-center p-4 ">
          <img width="250" src={reva} alt="title sponsor reva logo" />
        </div>
        <div className="title-sponsor glassmorphic flex items-center p-4	">
          <img
            width="250"
            classname=""
            src={ieee}
            alt="title sponsor ieee logo"
          />
        </div>
      </div>

      {/* tree section */}
      <div className=" font-[600] my-[2%] text-3xl md:text-4xl">Tree</div>
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

      {/* sapling section */}

      <div className=" font-[600] my-[2%] text-3xl md:text-4xl">Sapling</div>
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
    </section>
  );
};

export default Sponsers;
