import React from "react";

const Banner = (props) => {
  return (
    <div className="flex  flex-col justify-center items-center my-28 mx-auto glassmorphic-card w-[90%] md:max-w-[60%] py-8  text-center">
      <div className="main  text-white font-bold md:text-6xl text-5xl xs:text-4xl">
        <span className="text-LushGreen">REVA HACK</span> 2023
      </div>
      <div className="sub   font-light text-[#7C8590] md:text-2xl text-xl">
        Technology beyong Imagination
      </div>
    </div>
  );
};

export default Banner;
