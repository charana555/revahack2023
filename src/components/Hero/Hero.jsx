import "./Hero.css";
import useHeroTypingEffect from "./HeroLogic.js";

import React from "react";
import Timer from "./Timer.jsx";

const Hero = () => {
  const { currentText, cursorStyle } = useHeroTypingEffect();
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
      <section id="Hero">
        <div className="hero min-h-screen flex flex-col items-center justify-center text-white">
          <div className="text-center mt-20">
            <div className="my-24">
              <div className="text-center mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-[70px] font-semibold">
                  REVA HACK {"</>"} 2023
                </h1>
              </div>
              
            {/* The typewriter text */}
            <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl relative mb-4 text-[#0CCA4A] font-fira font-[300]">
                  {currentText}
                  <span className="cursor" style={cursorStyle}></span>
                </p>
              </div>
              <Timer />
              <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-32 md:space-y-0 justify-center mt-6">
                <div
                    className="apply-button"
                    data-hackathon-slug="reva-hack-1"
                    data-button-theme="light"
                    style={{ height: "44px", width: "312px" }}
                >
                  <button>
                    <span className="mr-4">Register</span>
                    <img
                        src={"Images/devfolio.png"}
                        alt="devfolio logo"
                        className="w-6 h-6 md:w-9 md:h-9 ml-3"
                    />
                  </button>
                </div>
                <button
                    className="hover:shadow-lg px-12 rounded-[3px] text-white text-2xl flex items-center justify-center h-[44px] w-[312px]"
                    style={{ backgroundColor: "#5865F2", border: "none" }}
                >
                  <img
                      src={"Images/discord.png"}
                      alt="discord logo"
                      className="w-8 h-6 mr-3"
                  />
                  <span className="mr-4 font-[530]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Join us
                </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
