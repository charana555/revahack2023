import React from "react";
import "./Prizes.css";

function Prizes() {
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
        className="flex flex-col text-white text-3xl h-auto items-center justify-center lg:mb-44"
      >
        <p
          className=" font-robot font-medium text-[50px] md:text-[72px]"
          style={headerStyle}
        >
          Prizes
        </p>

        <div className="w-[70%] xl:w-[60%] h-auto p-[10px] prize-tag">
          <div className="container glass ">
            <a href="https://reva-hack-1.devfolio.co/prizes" target="_blank">
              <div className="flex justify-end">
                  <button className="btn btn-primary btn-prize mt-[3%] mr-[10%] mb-[-5%] text-[20px] md:text-[30px] lg:text-[40px]">Bounty</button>
              </div>
            </a>
            <hr className="hr mx-auto" />
            <p
              className="text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-5"
              style={headerStyle1}
            >
              TOTAL PRIZE POOL OF
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-[5%]">
              ₹ 92,00,000
            </p>
          </div>
        </div>

        <div className="flex justify-center xl:space-x-10">
          <div className="w-[30%] xl:w-[27%] p-[10px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] prize-tag">
            <div
              className="container glass"
              // style={{ backgroundColor: "#515151" }}
            >
              <p
                className="text-lg sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl mb-3 mt-3 xl:mt-10 xl:mb-10"
                style={{ textAlign: "center" }}
              >
                Winner
              </p>
              <img
                // src="./Images/prize_golden.svg"
                src="./Images/winner.svg"
                alt="Winner"
                className="custom-image"
              ></img>
            </div>
          </div>
          <div className="w-[30%] xl:w-[27%] p-[10px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px] prize-tag">
            <div
              className="container glass"
              // style={{ backgroundColor: "#515151" }}
            >
              <p
                className="text-lg sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl mb-3 mt-3 xl:mt-10 xl:mb-10"
                style={{ textAlign: "center" }}
              >
                Runner-Up
              </p>
              <img
                src="./Images/runnerup.png"
                alt="Runner"
                className="custom-image"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prizes;
