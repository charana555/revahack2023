import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Tracks.css";

const Tracks = () => {
  
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"),{
      max: 3,
      speed: 400,
      glare: true,
      "max-glare": 1,
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
      className="mt-[10%] p-10 bg-primary flex-col text-white flex items-center justify-center">
      <p className="text-8xl text-secondary">Tracks</p>
      <div 
        id="container" 
        className="flex flex-row flex-wrap items-center justify-center relative max-w-7xl z-1">
        <div class="card">
          <div 
            id="head" 
            className="absolute top-52 text-2xl">Gen AI</div>
          <div 
            id="content" 
            className="absolute top-60 left-5 right-4 items-center z-1">
            <p>Gen AI, a convergence of cutting-edge technology and human ingenuity, ushers in a new era of intelligent systems.</p>
          </div>
        </div>

        <div class="card">
          <div 
            id="head" 
            className="absolute top-52 text-2xl">Block Chain</div>
          <div 
            id="content" 
            className="absolute top-60 left-5 right-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div class="card">
          <div 
            id="head" 
            className="absolute top-52 text-2xl">AR VR</div>
          <div 
            id="content" 
            className="absolute top-60 left-5 right-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>
        
        <div class="card">
          <div 
            id="head" 
            className="absolute top-52 text-2xl">Cloud IOT</div>
          <div 
            id="content" 
            className="absolute top-60 left-5 right-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div class="card">
          <div 
            id="head" 
            className="absolute top-52 text-2xl">Cybersecurity</div>
          <div 
            id="content" 
            className="absolute top-60 left-5 right-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tracks;
