import useHeroTypingEffect from './HeroLogic.js';
import './Hero.css';

const Hero = () => {
  const { currentText, cursorStyle } = useHeroTypingEffect();

  return (
      <div className="hero min-h-screen flex items-center justify-center bg-[#0d0f16] text-white">
        <div>
          <div className="my-32">
            <div className="text-center mb-4">
              <h1 className="text-4xl font-bold md:text-6xl lg:text-8xl">REVA HACK {'</>'} 2023</h1>
            </div>

            {/* The typewriter text */}
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl relative mb-4 text-neutral-500 font-mono font-medium">
                {currentText}
                <span className="cursor" style={cursorStyle}></span>
              </p>
            </div>
          </div>

          {/* Responsive buttons */}
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-32 sm:space-y-0 justify-center">
            <button className="bg-[#304ce4] hover:shadow-lg px-12 py-4 rounded-lg text-white text-3xl flex items-center">
              <span className="mr-4">Register</span>
              <img src={"Images/devfolio.png"} alt="devfolio logo" className="w-6 h-6 ml-3" />
            </button>
            <button className="bg-[#5c64f4] hover:shadow-lg px-12 py-4 rounded-lg text-white text-3xl flex items-center">
              <span className="mr-4">Join Us</span>
              <img src={"Images/discord.png"} alt="discord logo" className="w-8 h-6 ml-3" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default Hero;
