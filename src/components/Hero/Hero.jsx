import React, { useEffect, useRef } from "react";
import Typed from "typed.js"; // Import the Typed.js library
import GLOBE from "vanta/src/vanta.globe";
import RINGS from "vanta/src/vanta.rings";
import WAVES from "vanta/src/vanta.waves";
import "./Hero.css";
import useHeroTypingEffect from "./HeroLogic.js";
import Timer from "./Timer.jsx";

const Hero = () => {
  const { cursorStyle } = useHeroTypingEffect();

  const typedRef = useRef(null); // Create a ref for the Typed instance

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    RINGS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x0d0f16,
      color: 0xff0000,
    });

    // Initialize Typed.js inside this useEffect
    typedRef.current = new Typed('.typed-text', {
      strings: ["Let the Hack Begin;", "Technology beyond Imagination;", "Hack On: Nov 2nd - 4th"],

      typeSpeed: 60,
      backSpeed: 25,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '<span class="cursor-grey">|</span>', // Customize the cursor with a CSS class
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="Hero">
      <div id="vanta"> </div>
      <div className="hero min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center mt-20">
          <div className="my-24">
            <div className="text-center mb-2 text-sm sm:text-md md:text-2xl lg:text-3xl neon">
              36 Hours National Level Offline Hackathon
            </div>

            <div className="text-center mb-6">
              <h1
                className="text-3xl md:text-5xl lg:text-8xl xl:text-8xl font-semibold"
                data-text="U"
              >
                <span className="neon-white">REVA HACK </span>
                <span className="neon-white">{"</>"}</span>{" "}
                <span className="neon-white">2023</span>
              </h1>
              <div className="powered-by-container mt-3">
                <div className="font-thin text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl">
                  Powered by
                </div>
                <div className="bluelearn-logo">
                  <a href="https://www.bluelearn.in/" target="_blank">
                    <img
                      src="Images/bluelearn-logo-sm.png"
                      alt="bluelearn"
                      className="ml-2 h-8 sm:h-10 md:h-12 lg:h-12 xl:h-12"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* The typewriter text */}
            <div className="text-center text-2xl text-glow md:text-4xl lg:text-4xl xl:text-4xl relative mb-4 font-fira font-[300]">
              <span className="typed-text text-[#0CCA4A]"></span>{" "}
              {/* Typed.js will type the text here */}
            </div>
            <div className="text-[#BCBCBC]">
              <Timer />
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-20 md:space-y-0 justify-center mt-6">
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
              <a
                href="https://discord.gg/6Sv9ZdQ4er"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="hover:shadow-lg px-12 rounded-[3px] text-white text-2xl flex items-center justify-center h-[44px] w-[312px]"
                  style={{ backgroundColor: "#5865F2", border: "none" }}
                >
                  <img
                    src={"Images/discord.png"}
                    alt="discord logo"
                    className="w-8 h-6 mr-3"
                  />
                  <span
                    className="mr-4 font-[530]"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Join us
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
