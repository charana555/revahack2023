import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Tracks.css";

const Tracks = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 3,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      // "transform-style": "preserve-3d",
      // transform: perspective('500px'),
      // transform: translateZ('20px'),
      gyroscope: true,
      // gyroscopeMinAngleX: -20,
      // gyroscopeMaxAngleX: 20,
      // gyroscopeMinAngleY: -5,
      // gyroscopeMaxAngleY: 5,
    });
  }, []);

  return (
    <section
      id="Tracks"
      className="mt-[10%] p-10 bg-primary flex-col text-white flex items-center justify-center"
    >
      <p className="text-8xl text-secondary">Tracks</p>
      {/* card1 */}
      <div
        id="container"
        className="flex flex-row flex-wrap items-center justify-center relative max-w-7xl z-1"
      >
        <div className="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./Images/GenAI.svg"
              alt="genai"
              className="w-4/6 h-full"
            />
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 text-center items-center z-1"
          >
            <p>
              Ctrl+C Ctrl+V to the Future: Hacking Tomorrow's Universe with AI
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="card">
          <div
            id="img"
            className="absolute top-0 left-0 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./Images/blockchain.svg"
              alt="blockchain"
              className="w-full h-full"
            />
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 text-center items-center z-1"
          >
            <p>
              Building the Future on Immutable Blocks: Hack the Potential of
              Blockchain
            </p>
          </div>
        </div>
        {/* card3 */}
        <div className="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img src="./Images/ARVR.svg" alt="arvr" className="w-4/6 h-full" />
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 text-center items-center z-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vulputate pellentesque massa quis tempus.
            </p>
          </div>
        </div>
        {/* card4 */}
        <div className="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./Images/CloudIOT.svg"
              alt="cloudiot"
              className="w-4/6 h-full"
            />
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 text-center items-center z-1"
          >
            <p>
              Code in the Cloud, Control the World: Building Smart Solutions
              with IoT and Cloud
            </p>
          </div>
        </div>
        {/* card5 */}
        <div className="card">
          <div
            id="img"
            className="absolute top-0 left-0 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./Images/CyberSecurity.svg"
              alt="cybersecurity"
              className="w-full h-full"
            />
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 text-center items-center z-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vulputate pellentesque massa quis tempus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
