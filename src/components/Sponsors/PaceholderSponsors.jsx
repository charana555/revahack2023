import React from "react";
import ieee from "../../assets/SponsorLogos/titleSponsors/ieee.png";
import reva from "../../assets/SponsorLogos/titleSponsors/reva.png";
import sponsorbg from "../../assets/sponsorBg.png";
const PlaceholderSponsor = (props) => {
  return (
    <>
      <section
        id="Sponsors"
        className="flex-col text-white text-3xl w-full flex items-center justify-center my-5"
      >
        {/* spiral bg image */}
        <img className="absolute mt-[10%] z-1 " src={sponsorbg} />

        {/* title */}
        <div className="text-LushGreen  text-6xl md:text-7xl font-roboto font-bold ">
          Sponsors
        </div>
        {/* subtitle */}
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

        {/* title Sponsors logo section */}
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

        <div className=" font-[600] py-[50px] text-xl text-center md:text-2xl z-10">
          Stay Tuned: The Sponsorship Train Is Gathering Steam...
        </div>
      </section>
    </>
  );
};

export default PlaceholderSponsor;
