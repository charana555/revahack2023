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
        className="flex flex-col text-white text-3xl h-auto items-center justify-center lg:mb-44 font-medium"
      >
        <p
          className=" font-robot text-[50px] md:text-[72px]"
          style={headerStyle}
        >
          Prizes
        </p>

        <div className="w-[70%] xl:w-[60%] h-auto p-[5px] prize-tag">
          <div className="container glass ">
            <a href="https://reva-hack-1.devfolio.co/prizes" target="_blank">
              <div className="flex justify-end">
                  <button className="btn btn-primary btn-prize mt-[3%] mr-[10%] mb-[-5%] text-[15px] md:text-[25px] lg:text-[30px]">Bounty</button>
              </div>
            </a>
            <hr className="hr mx-auto" />
            <p
              className="font-medium text-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl mb-1 xl:mb-5"
              style={headerStyle1}
            >
              TOTAL PRIZE POOL OF
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-[5%]">
              ₹ 4,15,00,000
            </p>
          </div>
        </div>

        {/* prize amount for sub categories */}
        <div className="w-[70%] xl:w-[60%] h-auto p-[5px] mt-[-3%] xl:mt-[-2%] prize-tag">
          <div className="container glass flex justify-center">
            <div className="text-left text-sm md:text-2xl lg:text-3xl xl:text-3xl mt-10 mb-10 xl:mt-16 xl:mb-16 mx-auto font-medium">  
              <div className="mb-8 xl:mb-14 flex items-center">
                <img src="./Images/first.svg" alt="First" className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"></img>
                <div>  
                  <p 
                    style={headerStyle1}
                  >
                    Winner
                  </p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 40,000
                  </p>
                </div>
              </div>
              <div className="mb-8 xl:mb-14 flex items-center">
                <img src="./Images/second.svg" alt="First" className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"></img>
                <div>  
                  <p 
                    style={headerStyle1}
                  >
                    Runner Up
                  </p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 20,000
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="./Images/third.svg" alt="First" className="custom-image h-10 md:h-14 lg:h-20 xl:h-28 w-auto mr-4"></img>
                <div>  
                  <p 
                    style={headerStyle1}
                  >
                    Second Runner Up
                  </p>
                  <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl">
                    ₹ 15,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prizes;
