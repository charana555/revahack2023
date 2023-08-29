import { React, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Tracks.css";

const Tracks = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 3,
      speed: 400,
      glare: true,
      "max-glare": 1,
      // "transform-style": "preserve-3d",
      // transform: perspective('500px'),
      // transform: translateZ('20px'),
      gyroscope: true,
      gyroscopeMinAngleX: -20,
      gyroscopeMaxAngleX: 20,
      gyroscopeMinAngleY: -5,
      gyroscopeMaxAngleY: 5,
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
        <div class="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./public/images/GenAI.svg"
              alt="genai"
              className="w-4/6 h-full"
            />
          </div>
          <div id="head" className="absolute top-52 text-2xl">
            Gen AI
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
        <div class="card">
          <div
            id="img"
            className="absolute top-0 left-0 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./public/images/blockchain.svg"
              alt="blockchain"
              className="w-full h-full"
            />
          </div>
          <div id="head" className="absolute top-52 text-2xl">
            Block Chain
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
        <div class="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./public/images/ARVR.svg"
              alt="arvr"
              className="w-4/6 h-full"
            />
          </div>
          <div id="head" className="absolute top-52 text-2xl">
            AR VR
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
        <div class="card">
          <div
            id="img"
            className="absolute top-0 left-16 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./public/images/CloudIOT.svg"
              alt="cloudiot"
              className="w-4/6 h-full"
            />
          </div>
          <div id="head" className="absolute top-52 text-2xl">
            Cloud IOT
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
        <div class="card">
          <div
            id="img"
            className="absolute top-0 left-0 right-0 bottom-40 bg-cover bg-center bg-no-repeat"
          >
            <img
              src="./public/images/CyberSecurity.svg"
              alt="cybersecurity"
              className="w-full h-full"
            />
          </div>
          <div id="head" className="absolute top-52 text-2xl">
            Cybersecurity
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
