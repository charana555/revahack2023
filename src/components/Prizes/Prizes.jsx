import React from "react"
import  './Prizes.css'

const Prizes = () => {
  return (
    <div>
    <section
      id="Prizes"
      className="flex-col text-white text-3xl w-full h-screen flex items-center justify-center"
    >
       <p className="text-8xl text-secondary">Prizes</p>
       
      <div className="container glass">
       <ul id="nav">
        <li>Bounty</li>
        <li>Participation Perks</li>
       </ul>
       <hr id="h"/>
      <p className=" text-4xl text-secondary drop-shadow-lg shadow-secondary ">
      
      </p>
      </div>
    </section>
    </div>
  );
};

export default Prizes;

