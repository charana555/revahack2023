import React from "react";
import MLHPriceCard from "./MLHPrizeCard";
import "./Prizes.css";

const mlhPrizes = [
  {
    id: 1,
    img: "./Images/MLHIcons/hedera.png",
    title: "Best Use of Hedera",
    desc: "Build a project on Hedera's test network for a chance to win Mechanical Keyboards for you and your team!",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=with%20Taipy%20%E2%86%92-,Best%20Use%20of%20Hedera,-Glorious%20Modular%20Compact",
  },
  {
    id: 2,
    img: "./Images/MLHIcons/mongodb.png",
    title: "Best Use of MongoDB Atlas",
    desc: "Stand a chance to win a M5GO IoT Starter Kit for you and each member of your team",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=Best%20Use%20of%20MongoDB%20Atlas",
  },
  {
    id: 3,
    img: "./Images/MLHIcons/github.png",
    title: "Most Creative Use of GitHub",
    desc: "Stand a chance to win a GitHub Octocat Puzzle & Sticker bundle",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=GoDaddy%20Registry%20%E2%86%92-,Most%20Creative%20Use%20of%20GitHub,-GitHub%20Octocat%20Puzzle",
  },
  {
    id: 4,
    img: "./Images/MLHIcons/godaddy.png",
    title: "Best Domain Name from GoDaddy Registry",
    desc: "Stand a chance to win a Hack from Home Kit containing wireless earbuds, blue light glasses, selfie ring light.",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=Best%20Domain%20Name%20from%20GoDaddy%20Registry",
  },

  {
    id: 5,
    img: "./Images/MLHIcons/mathworks.png",
    title: "Best Use of MATLAB",
    desc: "Stand a chance to win a to win an exclusive MathWorks branded Wireless YoYo Speaker! + a free MATLAB software license",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=with%20Streamlit%20%E2%86%92-,Best%20Use%20of%20MATLAB,-Wireless%20YoYo%20Speaker",
  },
  {
    id: 6,
    img: "./Images/MLHIcons/streamlit.png",
    title: "Best Use of Streamlit",
    desc: "Stand a chance to win a Pimoroni PicoSystem programmable gaming system for you and each member of your team.",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=Best%20Use%20of%20Streamlit",
  },
  {
    id: 7,
    img: "./Images/MLHIcons/starknet.png",
    title: "Best Use of Starknet",
    desc: "Stand a chance to win a Starknet care package, including a backpack, socks, water bottle, cushion pillow, and a ticket to a Starknet sponsored Web3 conference of your choice!",
    highlightedUrl:
      "https://hack.mlh.io/prizes#:~:text=Best%20Use%20of%20Starknet",
  },
];

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
        {/* Prize Pool */}
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
        {/* internship from bluelearn */}
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
        <div className="glass w-[70%] xl:w-[60%] h-auto  prize-tag flex flex-col sm:flex-row items-center  justify-center  p-6 md:p-6 gap-5 md:gap-10">
          <div className=" w-2/3 md:mr-[15%]  ">
            <img
              src="./Images/OSCode.png"
              alt="First"
              className="custom-image  w-[40%] mx-auto"
            ></img>
          </div>

          <div className="mx-auto">
            <p className="text-center md:text-left text-lg md:text-2xl xl:text-3xl md:ml-[-30%]">
              <span className="text-NeonGreen">Internship</span> Opportunities
              from OSCode Community for 2 Teams{" "}
            </p>
          </div>
        </div>

        {/* intership from techvestors */}
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

        {/* MLH PRIZESSSS~~ */}
        <div
          className="mlh-title-stlye  text-center text-3xl lg:text-5xl pt-10 pb-5 ;
"
        >
          MLH <span className=" text-NeonGreen ">Prizes & Perks</span>
          {/* <div className=" text-NeonGreen inline-block mlh-title-arrow">
            →
          </div>{" "} */}
        </div>
        {/* <MLHPriceCard /> */}
        {mlhPrizes.map((prize) => (
          <MLHPriceCard
            key={prize.id}
            img={prize.img}
            title={prize.title}
            desc={prize.desc}
            highlightedUrl={prize.highlightedUrl}
          />
        ))}
        {/* bounty Prizes */}
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
                &nbsp;
                <div className="inline-block  text-NeonGreen bounty-arrow">
                  →
                </div>{" "}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Prizes;
