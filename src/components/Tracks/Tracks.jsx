import React from "react";
import "./Tracks.css";

const Tracks = () => {
  return (
    <section
      id="Tracks"
      className="m-0 p-0 bg-primary flex-col text-white flex items-center justify-center box-border">
      <p className="text-8xl">Tracks</p>
      {/* ... */}
      <div 
        id="container" 
        className="flex-col flex-wrap flex items-center justify-center relative max-w-7xl z-1"
      >
        <div id="card">
          <div id="head" className="absolute top-52 text-2xl">Gen AI</div>
          <div id="content" className="absolute top-60 left-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div id="card">
          <div id="head" className="absolute top-52 text-2xl">Block Chain</div>
          <div id="content" className="absolute top-60 left-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div id="card">
          <div id="head" className="absolute top-52 text-2xl">AR VR</div>
          <div id="content" className="absolute top-60 left-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div id="card">
          <div id="head" className="absolute top-52 text-2xl">Cloud IOT</div>
          <div id="content" className="absolute top-60 left-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

        <div id="card">
          <div id="head" className="absolute top-52 text-2xl">Cybersecurity</div>
          <div id="content" className="absolute top-60 left-4 items-center z-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pellentesque massa quis tempus.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tracks;
