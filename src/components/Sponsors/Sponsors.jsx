import React from "react";

// logos import
import echo3d from "../../assets/SponsorLogos/Sapling/echo-white.webp";
import filecoin from "../../assets/SponsorLogos/Sapling/filecoin.png";
import replit from "../../assets/SponsorLogos/Sapling/replit.png";
import solana from "../../assets/SponsorLogos/Sapling/solana.png";
import github from "../../assets/SponsorLogos/github.png";
import mlh from "../../assets/SponsorLogos/mlh.png";
import stickerz from "../../assets/SponsorLogos/stickerz.png";
import ieee2 from "../../assets/SponsorLogos/titleSponsors/ieee.jpg";
import ieee from "../../assets/SponsorLogos/titleSponsors/ieee.png";
import ieeebng from "../../assets/SponsorLogos/titleSponsors/ieeebng.png";

import jb from "../../assets/SponsorLogos/jblogo.png";
import techvester from "../../assets/SponsorLogos/techvester.png";

import bluelearn from "../../assets/SponsorLogos/titleSponsors/bluelearn.png";
import reva from "../../assets/SponsorLogos/titleSponsors/reva.png";
import reva2 from "../../assets/SponsorLogos/titleSponsors/reva2.png";
import revalogo from "../../assets/SponsorLogos/titleSponsors/revalogo.jpg";
import tgp from "../../assets/SponsorLogos/titleSponsors/tgp.png";

// Tree logos
import occode from "../../assets/SponsorLogos/OSCode.png";
import cake from "../../assets/SponsorLogos/Tree/cake_logo_white.png";
import devfolio from "../../assets/SponsorLogos/Tree/devfolio.png";
import gdsclogo from "../../assets/SponsorLogos/Tree/gdsclogowhite.png";
import polygon from "../../assets/SponsorLogos/Tree/polygon.png";
import solidityscan from "../../assets/SponsorLogos/Tree/solidityscan.png";
import { default as voice } from "../../assets/SponsorLogos/Tree/voiceflow-logo.png";

import streamyard from "../../assets/SponsorLogos/Sapling/streamyard.png";
import azure from "../../assets/SponsorLogos/Tree/axure.png";
import xyz from "../../assets/SponsorLogos/Tree/xyz_logo_white.png";

import { faWineGlass } from "@fortawesome/free-solid-svg-icons";
import aptos from "../../assets/SponsorLogos/Tree/aptos.png";
import movv from "../../assets/SponsorLogos/Tree/movv.jpg";
import sponsorbg from "../../assets/sponsorBg.png";
import "./Sponsers.css";
import SponsorBox from "./SponsorBox";
const treelogos = [
  { logo: devfolio, alt: "devfolio white logo" },
  { logo: polygon, alt: "polygon white logo" },
  { logo: gdsclogo, alt: "gdsc reva logo" },
  { logo: xyz, alt: "xyz logo" },
  { logo: aptos, alt: "aptos logo" },
  { logo: movv, alt: "movv logo" },
  { logo: cake, alt: "cake logo" },
  { logo: voice, alt: "voice logo" },
  { logo: azure, alt: "azure logo" },
  { logo: solidityscan, alt: "solidityscan logo" },
  // { logo: reva, alt: "sad" },
];

const saplinglogos = [
  { logo: filecoin, alt: "filecoin white logo" },
  { logo: replit, alt: "replit white logo" },
  { logo: solana, alt: "solana white logo" },
  { logo: echo3d, alt: "echo 3d white logo" },
  { logo: streamyard, alt: "streamyard logo" },
];

const Sponsors = () => {
  const handleStickerClick = () => {
    window.location.href = "https://www.standoutstickers.com/";
  };

  return (
    <section
      id="Sponsors"
      className="flex-col text-white text-3xl w-full flex items-center justify-center my-[5%]"
    >
      <img className="absolute mt-[10%] z-[-1] " src={sponsorbg} />
      <div className="text-LushGreen  text-[50px] md:text-[72px] font-roboto font-medium ">
        Sponsors
      </div>

      <p className="  text-sm lg:text-2xl md:text-lg text-secondary drop-shadow-lg shadow-secondary text-center font-light tracking-wider mt-10 mb-8">
        Interested in Sponsoring? <br />
        Contact us at
        <a className="text-white " href="mailto:revahack@gmail.com">
          {" "}
          revahack@gmail.com
        </a>
      </p>

      {/* title Sponsers  */}

      <div className=" font-[600]  py-[4%] md:pb-[1%] text-xl md:text-2xl">
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

      {/* Web3 Track Sponsors  */}

      <div className=" font-[600] py-[4%] md:pb-[1%]   text-xl md:text-2xl ">
        Web3 Track Sponsors
      </div>
      <div className="flex  flex-wrap justify-center gap-4 md:gap-10  ">
        <div className="web3community-sponsor glassmorphic flex items-center ">
          <img classname="" src={movv} alt="title sponsor ieee logo" />
        </div>
        <div className="web3community-sponsor glassmorphic flex items-center ">
          <img classname=" " src={aptos} alt="title sponsor ieee logo" />
        </div>
      </div>

      {/* Hackathon Partners  */}

      <div className=" font-[600]  py-[4%] md:pb-[1%] text-xl md:text-2xl">
        Hackathon Partners
      </div>

      <div className="flex  flex-wrap justify-center gap-4 md:gap-10  ">
        <div className="community-sponsor glassmorphic flex items-center ">
          <img
            classname=" p-1  md:p-2"
            src={mlh}
            alt="title sponsor ieee logo"
          />
        </div>
        <div className=" community-sponsor glassmorphic flex items-center justify-center  ">
          <img className=" p-1  md:p-2 " src={github} alt="community sponsor" />
        </div>
        <div
          className="community-sponsor glassmorphic flex items-center hover:cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={handleStickerClick}
        >
          <img
            classname="p-1  md:p-2 "
            src={stickerz}
            alt="title sponsor ieee logo"
          />
        </div>
      </div>
      {/* Hiring and Community Partners  */}

      <div className=" font-[600] py-[4%] md:pb-[1%]   text-xl md:text-2xl ">
        Community and Hiring Partners
      </div>
      <div className="flex  flex-wrap justify-center gap-4 md:gap-10  ">
        <div className=" community-sponsor glassmorphic flex items-center justify-center  ">
          <img
            className=" p-1 w-[100px] md:p-2 "
            src={tgp}
            alt="community sponsor"
          />
        </div>

        <div className="community-sponsor glassmorphic flex items-center ">
          <img classname="" src={occode} alt="title sponsor ieee logo" />
        </div>
        <div className="community-sponsor glassmorphic flex items-center ">
          <img classname="p-2 " src={bluelearn} alt="title sponsor ieee logo" />
        </div>
      </div>

      {/* Tooling partner */}
      <div className=" font-[600] py-[4%] md:pb-[1%]   text-xl md:text-2xl ">
        Tooling Sponsor
      </div>
      <div className="flex justify-center gap-10  ">
        <div className=" title-sponsor glassmorphic flex items-center justify-center  ">
          <img
            className="p-2 w-[200px] md:max-w-[110px]"
            src={jb}
            alt="title sponsor reva logo"
          />
        </div>
      </div>

      {/* technical partner it seems, honestly way too many categories hope they giving good amount of money man, idk why i started ranting in comments but i have already typed soo much soo now this will not be deleted :D */}
      <div className=" font-[600] py-[4%] md:pb-[1%]   text-xl md:text-2xl ">
        Technical Partner
      </div>
      <div className="flex justify-center gap-10  ">
        <div className=" title-sponsor glassmorphic flex items-center justify-center  ">
          <img
            className="m-4 p-2 "
            src={techvester}
            alt=" sponsor techvester logo"
          />
        </div>
      </div>

      {/* tree section */}
      <div className=" font-[600] py-[4%] md:pb-[1%] text-xl md:text-2xl">
        Tree
      </div>

      {/* temp */}

      {/* Scroller */}
      <div className="slider">
        <div className="slide-track">
          {/* {treelogos.map((item, i) => (
            <span key={i}>
              <SponsorBox image={item.logo} alt={item.alt} />
            </span>
          ))}
          {treelogos.map((item, i) => (
            <span key={i}>
              <SponsorBox image={item.logo} alt={item.alt} />
            </span>
          ))}
          {treelogos.map((item, i) => (
            <span key={i}>
              <SponsorBox image={item.logo} alt={item.alt} />
            </span>
          ))}
          {treelogos.map((item, i) => (
            <span key={i}>
              <SponsorBox image={item.logo} alt={item.alt} />
            </span>
          ))} */}

          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[2].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[3].logo} alt={treelogos[3].alt} />
          <SponsorBox image={treelogos[4].logo} alt={treelogos[4].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[2].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[3].logo} alt={treelogos[3].alt} />
          <SponsorBox image={treelogos[4].logo} alt={treelogos[4].alt} />
          {/* <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[1].logo} alt={treelogos[1].alt} />
          <SponsorBox image={treelogos[2].logo} alt={treelogos[2].alt} />
          <SponsorBox image={treelogos[3].logo} alt={treelogos[3].alt} />
          <SponsorBox image={treelogos[4].logo} alt={treelogos[4].alt} /> */}
        </div>
      </div>
      <div className="slider2">
        <div className="slide-track2">
          <SponsorBox image={treelogos[5].logo} alt={treelogos[5].alt} />
          <SponsorBox image={treelogos[6].logo} alt={treelogos[6].alt} />
          <SponsorBox image={treelogos[7].logo} alt={treelogos[7].alt} />
          <SponsorBox image={treelogos[8].logo} alt={treelogos[8].alt} />
          <SponsorBox image={treelogos[9].logo} alt={treelogos[9].alt} />
          <SponsorBox image={treelogos[5].logo} alt={treelogos[5].alt} />
          <SponsorBox image={treelogos[6].logo} alt={treelogos[6].alt} />
          <SponsorBox image={treelogos[7].logo} alt={treelogos[7].alt} />
          <SponsorBox image={treelogos[8].logo} alt={treelogos[8].alt} />
          <SponsorBox image={treelogos[9].logo} alt={treelogos[9].alt} />
          {/* <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} />
          <SponsorBox image={treelogos[0].logo} alt={treelogos[0].alt} /> */}
        </div>
      </div>

      {/* sapling section */}

      <div className=" font-[600] py-[4%] md:pb-[1%] text-xl md:text-2xl">
        Sapling
      </div>

      {/* Scoller */}
      <div className="slider">
        <div className="slide-track">
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[3].logo} alt={saplinglogos[3].alt} />
          <SponsorBox image={saplinglogos[4].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[2].logo} alt={saplinglogos[3].alt} />
          <SponsorBox image={saplinglogos[3].logo} alt={saplinglogos[0].alt} />
          <SponsorBox image={saplinglogos[4].logo} alt={saplinglogos[1].alt} />
          <SponsorBox image={saplinglogos[0].logo} alt={saplinglogos[2].alt} />
          <SponsorBox image={saplinglogos[1].logo} alt={saplinglogos[3].alt} />
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
