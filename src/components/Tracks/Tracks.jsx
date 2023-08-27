import { React, useEffect } from "react";
import { VanillaTilt } from "vanilla-tilt";
import "./Tracks.css";

const Tracks = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 3,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <section
      id="Tracks"
      className="m-0 p-0 bg-primary flex-col text-white flex items-center justify-center box-border"
    >
      <p className="text-8xl">Tracks</p>
      <div
        id="container"
        className="flex-col flex-wrap flex items-center justify-center relative max-w-7xl z-1"
      >
        <div class="card">
          <div id="head" className="absolute top-52 text-2xl">
            Gen AI
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 items-center z-1"
          >
            <p>
              Gen AI, a convergence of cutting-edge technology and human
              ingenuity, ushers in a new era of intelligent systems.
            </p>
          </div>
        </div>

        <div class="card">
          <div id="head" className="absolute top-52 text-2xl">
            Block Chain
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 items-center z-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vulputate pellentesque massa quis tempus.
            </p>
          </div>
        </div>

        <div class="card">
          <div id="head" className="absolute top-52 text-2xl">
            AR VR
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 items-center z-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vulputate pellentesque massa quis tempus.
            </p>
          </div>
        </div>

        <div class="card">
          <div id="head" className="absolute top-52 text-2xl">
            Cloud IOT
          </div>
          <div
            id="content"
            className="absolute top-60 left-5 right-4 items-center z-1"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vulputate pellentesque massa quis tempus.
            </p>
          </div>
        </div>

        <div class="card">
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
            className="absolute top-60 left-5 right-4 items-center z-1"
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
