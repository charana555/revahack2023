import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <section className="  flex flex-col text-white text-center text-3xl items-center justify-center pixel-bg mb-20">
      {/* <div id="img" className="h-auto justify-center items-center">
        <img src="./Images/pixel.svg" alt="pixel" className="absolute w-[100%] h-[50%]" />
      </div> */}
      <div className="flex flex-col justify-center items-center mx-auto glassmorphic-card w-[90%] md:max-w-[60%] m-auto py-14 text-center  ">
        <div className="main text-white font-bold xl:text-7xl  md:text-6xl sm:text-5xl xs:text-4xl">
          <span className="text-LushGreen">REVA HACK {"</>"} </span> 2023
        </div>
        <div className="sub font-light text-[#7C8590] md:text-2xl text-xl">
          Technology beyond Imagination
        </div>
      </div>
    </section>
  );
};

export default Banner;
