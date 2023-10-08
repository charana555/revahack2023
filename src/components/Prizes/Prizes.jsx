import React from "react";
import "./Prizes.css";

function Prizes() {
  const headerStyle = {
    color: "#6D5BF6",
  };

  const headerStyle1 = {
    color: "#0CCA4A",
  };

  const handleDivClick = () => {
    window.location.href = "https://reva-hack-1.devfolio.co/prizes";
  };

  return (
    <div>
      <section
        id="Prizes"
        className="flex flex-col text-white text-3xl h-auto items-center justify-center lg:mb-44 gap-3 lg:gap-6 font-medium"
      >
        <p
          className=" font-robot text-[50px] md:text-[72px]"
          style={headerStyle}
        >
          Prizes
        </p>

        <div className="w-[70%] xl:w-[60%] h-auto mt-10  prize-tag">
          <div className="container glass py-[5%] ">
            {/* <a
              href="https://reva-hack-1.devfolio.co/prizes?partner=Polygon"
              target="_blank"
            >
              <div className="flex justify-end">
                <button className="btn underline btn-primary btn-prize mt-[3%] mr-[10%] mb-[-5%] text-[15px] md:text-[25px] lg:text-[30px] hover:scale-110 active:scale-90">
                  Bounty
                </button>
              </div>
            </a> */}
            {/* <hr className="hr mx-auto" /> */}
            <p
              className="font-medium text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-1 xl:mb-5"
              style={headerStyle1}
            >
              TOTAL PRIZE POOL OF
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl ">
              ₹ 5,00,00,000
            </p>
          </div>
        </div>

        {/* prize amount for sub categories */}
        <div className="w-[70%] xl:w-[60%] h-auto  prize-tag">
          <div className="container glass flex justify-center">
            <div className="text-left text-sm md:text-2xl lg:text-3xl xl:text-3xl mt-10 mb-10 xl:mt-16 xl:mb-16 mx-auto font-medium">
              <div className="mb-8 xl:mb-14 flex items-center">
                <img
                  src="./Images/first.svg"
                  alt="First"
                  className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"
                ></img>
                <div>
                  <p style={headerStyle1}>Winner</p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 40,000
                  </p>
                </div>
              </div>
              <div className="mb-8 xl:mb-14 flex items-center">
                <img
                  src="./Images/second.svg"
                  alt="First"
                  className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"
                ></img>
                <div>
                  <p style={headerStyle1}>Runner Up</p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 25,000
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="./Images/third.svg"
                  alt="First"
                  className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"
                ></img>
                <div>
                  <p style={headerStyle1}>Second Runner Up</p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 10,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass w-[70%] xl:w-[60%] h-auto  prize-tag flex flex-col sm:flex-row items-center  justify-center  p-6 md:p-12 gap-5 md:gap-10">
          <div className=" w-2/3 ">
            <img
              src="./Images/bluelearn.png"
              alt="First"
              className="custom-image  w-[100%]"
            ></img>
          </div>

          <div className="mx-auto">
            <p className="text-center md:text-left text-lg md:text-2xl xl:text-3xl ">
              <span className="text-NeonGreen">Internship</span> Opportunities
              at various tech-startups for 2 Teams from each track
            </p>
          </div>
        </div>

        <div className="glass w-[70%] xl:w-[60%] h-auto  prize-tag flex flex-col sm:flex-row items-center  justify-center  p-6 md:p-12 gap-5 md:gap-10">
          <div className="w-2/3  sm:w-1/3 mr-[4%] ">
            <img
              src="./Images/techvesters.png"
              alt="First"
              className="custom-image  w-[100%]"
            ></img>
          </div>

          <div className="mx-auto">
            <p className="text-center md:text-left text-lg md:text-2xl xl:text-3xl ">
              <span className="text-NeonGreen">Internship</span> Opportunities
              from Techvestors
            </p>
          </div>
        </div>

        <div
          onClick={handleDivClick}
          style={{ cursor: "pointer" }}
          className="glass w-[70%] xl:w-[60%] h-auto  prize-tag flex  flex-row justify-center p-6 md:p-12  gap-5 md:gap-10 items-center bounty-styles"
        >
          <div className="w-2/3  sm:w-1/3 flex justify-center">
            <img
              src="./Images/bounty.svg"
              alt="First"
              className="custom-image  max-h-[120px] w-[100%]"
            ></img>
          </div>

          <div className="mx-auto">
            <p className="text-left md:text-left lg:ml-[-30px] text-lg md:text-2xl xl:text-3xl ">
              Bounty Prizes worth up to{" "}
              <span className="text-NeonGreen">
                <span className=" text-NeonGreen price-text">$7200</span>
                &nbsp;<span className="  text-NeonGreen bounty-arrow">
                  →
                </span>{" "}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prizes;
