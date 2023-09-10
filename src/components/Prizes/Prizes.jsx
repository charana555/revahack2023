import React from "react";
import "./Prizes.css";

function Prizes () {
  const headerStyle = {
    color: "#6D5BF6",
  };

  const headerStyle1 = {
    color: "#0CCA4A",
  };

  return (
    <div>
      <section
        id="Prizes"
        className="flex flex-col text-white text-3xl h-auto items-center justify-center mb-10%"
      >
        <p className="text-7xl" style={headerStyle}>Prizes</p>

        <div className="w-[50%] h-auto p-[10px] prize-tag">
          <div className="container glass">
            <hr className="hr" />
            <p className="text-5xl" style={headerStyle1}>TOTAL PRIZE POOL OF</p>
            <p className="text-8xl mb-[4%]">₹ 5,00,000</p>
          </div>
        </div>
        <div className="flex justify-between -mx-4">
          <div className="w-[30%] p-[10px] prize-tag">
            <div className="container glass" style={{ backgroundColor: '#515151' }}>
              <p className="text-7xl mt-10 mb-10" style={{ textAlign: 'center'}}>Winner</p>
              <img src="./Images/prize_golden.svg" alt="Winner" className="custom-image"></img>
            </div>
          </div>
          <div className="w-[30%] p-[10px] prize-tag">
            <div className="container glass" style={{ backgroundColor: '#515151' }}>
              <p className="text-7xl mt-10 mb-10" style={{ textAlign: 'center'}}>Runner</p>
              <img src="./Images/prize_sliv.svg" alt="Runner" className="custom-image"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;
