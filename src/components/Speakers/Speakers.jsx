import React from "react";
import "./Banner.css";

const Speakers = (props) => {
  return (
    <section className="  flex flex-col text-white text-center text-3xl items-center justify-center pixel-bg mb-20">
      {/* <div id="img" className="h-auto justify-center items-center">
        <img src="./Images/pixel.svg" alt="pixel" className="absolute w-[100%] h-[50%]" />
      </div> */}
      <div className="flex cursor-pointer flex-col hover:scale-110 ease-in-out duration-300 justify-center items-center mx-auto glassmorphic-card w-[90%] md:max-w-[70%] m-auto py-14 text-center  ">
        <div className="main text-white font-bold xl:text-7xl  md:text-6xl sm:text-5xl xs:text-4xl">
          <span className="text-LushGreen uppercase">Speakers and Judges </span>{" "}
          2023
        </div>
        <div className="sub font-semibold text-white md:text-2xl text-xl  mt-3">
          <a
            href="https://reva-hack-1.devfolio.co/speakers-judges"
            target="_blank"
          >
            Click Here
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;

//text-[#7C8590]
