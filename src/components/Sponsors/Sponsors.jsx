import React from "react";

// logos import
import filecoin from "../../assets/SponsorLogos/Sapling/filecoin.png";
import replit from "../../assets/SponsorLogos/Sapling/replit.png";
import solana from "../../assets/SponsorLogos/Sapling/solana.png";
import devfolio from "../../assets/SponsorLogos/Tree/devfolio.png";
import polygon from "../../assets/SponsorLogos/Tree/polygon.png";
import ieee from "../../assets/SponsorLogos/titleSponsors/ieee.png";

import ieee2 from "../../assets/SponsorLogos/titleSponsors/ieee.jpg";
import ieeebng from "../../assets/SponsorLogos/titleSponsors/ieeebng.png";

import reva from "../../assets/SponsorLogos/titleSponsors/reva.png";
import reva2 from "../../assets/SponsorLogos/titleSponsors/reva2.png";
import revalogo from "../../assets/SponsorLogos/titleSponsors/revalogo.jpg";

import bluelearn from "../../assets/SponsorLogos/titleSponsors/bluelearn.png";
import tgp from "../../assets/SponsorLogos/titleSponsors/tgp.png";

import sponsorbg from "../../assets/sponsorBg.png";
import "./Sponsers.css";
import SponsorBox from "./SponsorBox";
const treelogos = [
  { logo: devfolio, alt: "devfolio white logo" },
  { logo: polygon, alt: "polygon white logo" },
  // { logo: reva, alt: "sad" },
];

const saplinglogos = [
  { logo: filecoin, alt: "filecoin white logo" },
  { logo: replit, alt: "replit white logo" },
  { logo: solana, alt: "solana white logo" },
];

const Sponsors = () => {
  return (
    <section
      id="Sponsors"
      className="flex-col text-white text-3xl w-full flex items-center justify-center my-[5%]"
    >
      <img className="absolute mt-[10%] z-[-1] " src={sponsorbg} />
      <div className="text-LushGreen  text-[50px] md:text-[72px] font-roboto font-medium ">
        Sponsors
      </div>

      <p className="  text-xs md:text-lg sm:text-xs text-secondary drop-shadow-lg shadow-secondary text-center font-light tracking-wider mt-10 mb-8">
        Interested in Sponsoring? <br />
        Contact us at
        <a className="text-white " href="mailto:revahack@gmail.com">
          {" "}
          revahack@gmail.com
        </a>
      </p>

      {/* title Sponsers  */}

      <div className=" font-[600] md:mt-[10px]  mb-[2%] text-xl md:text-2xl">
        Title Sponsors
      </div>
      <div className="flex justify-center gap-2 md:gap-10 px-4 ">
        <div className=" title-sponsor glassmorphic flex items-center justify-center  ">
          <img src={reva2} alt="title sponsor reva logo" />
        </div>
        {/* <div className="title-sponsor glassmorphic flex items-center ">
          <img classname="" src={ieee} alt="title sponsor ieee logo" />
        </div> */}
        <div className="title-sponsor glassmorphic flex items-center ">
          <img classname="" src={ieeebng} alt="title sponsor ieee logo" />
        </div>
        <div className="title-sponsor py-1 glassmorphic flex items-center justify-center ">
          <img classname="" src={ieee2} alt="title sponsor ieee logo" />
        </div>
      </div>

      {/* Hiring and Community Partners  */}

      <div className=" font-[600] md:mt-[10px]  mb-[2%] text-xl md:text-2xl py-8 md:py-4">
        Community and Hiring Partners
      </div>
      <div className="flex justify-center gap-10  ">
        <div className=" title-sponsor glassmorphic flex items-center justify-center  ">
          <img
            className="p-2 w-10 md:w-24"
            src={tgp}
            alt="title sponsor reva logo"
          />
        </div>
        {/* <div className="title-sponsor glassmorphic flex items-center ">
          <img classname="" src={ieee} alt="title sponsor ieee logo" />
        </div> */}
        <div className="title-sponsor glassmorphic flex items-center ">
          <img classname="" src={bluelearn} alt="title sponsor ieee logo" />
        </div>
        {/* <div className="title-sponsor glassmorphic flex items-center justify-center ">
          <img
            classname="w-full h-full object-cover"
            src={ieee}
            alt="title sponsor ieee logo" 
          />
        </div> */}
      </div>

      {/* tree section */}
      <div className=" font-[600] my-[2%] text-xl md:text-2xl">Tree</div>

      {/* temp */}

      {/* Scroller */}
      <div className="slider">
        <div className="slide-track">
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
        </div>
      </div>
      {/* <div className="slider2">
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
      </div> */}

      {/* sapling section */}

      <div className=" font-[600] my-[2%] text-xl md:text-2xl">Sapling</div>

      {/* Scoller */}
      <div className="slider">
        <div className="slide-track">
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[2].alt} />
        </div>
      </div>
      {/* <div className="slider2">
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
      </div> */}
    </section>
  );
};

export default Sponsors;
