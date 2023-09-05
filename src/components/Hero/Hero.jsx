import useHeroTypingEffect from './HeroLogic.js';
import './Hero.css';

import React from "react";

const Hero = () => {
  const { currentText, cursorStyle } = useHeroTypingEffect();
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
      <section id="Hero">
          <div className="hero min-h-screen flex items-center justify-center text-white">
            <div>
              <div className="my-24">
                <div className='flex justify-center md:space-x-4 mb-5 font-semibold'>
                  <p className='hidden md:block text-[2px] md:text-4xl text-[#6D5BF6]'>SPONSORED BY</p>
                  <img src={'Images/ieeelogo.png'} alt='ieee logo' className='h-10 w-24 md:h-58 md:w-126' />
                </div>

                <div className="text-center mb-4">
                  <h1 className="text-4xl md:text-6xl lg:text-[105px]">REVA HACK {'</>'} 2023</h1>
                </div>

                {/* The typewriter text */}
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl relative mb-4 text-[#0CCA4A] font-fira font-[300]">
                    {currentText}
                    <span className="cursor" style={cursorStyle}></span>
                  </p>
                </div>
              </div>
              {/* Responsive buttons */}
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-32 sm:space-y-0 justify-center font-roboto">

                <div
                    className="apply-button"
                    data-hackathon-slug="REVA HACK 2023"
                    data-button-theme="light"
                    style={{ height: '44px', width: '312px' }}
                >
                  <button>
                    <span className="mr-4">Register</span>
                    <img src={"Images/devfolio.png"} alt="devfolio logo" className="w-6 h-6 md:w-9 md:h-9 ml-3" />
                  </button>
                </div>
                <button className="bg-[#5c54f4] hover:shadow-lg px-12 py-4 rounded-[16px] text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center justify-center md:h-[100px] md:w-[320px] lg:w-[420px]">
                  <span className="mr-4">Join Us</span>
                  <img src={"Images/discord.png"} alt="discord logo" className="w-8 h-6 md:w-11 md:h-8 ml-3" />
                </button>
              </div>
            </div>
          </div>

      </section>
  );
};

export default Hero;
