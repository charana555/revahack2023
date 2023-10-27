import React from "react";

const MLHPriceCard = (props) => {
  const redirectToMLH = () => {
    window.location.href = `${props.highlightedUrl}`;
  };
  return (
    <>
      <div
        className="glass w-[70%] xl:w-[60%] h-auto  prize-tag flex flex-col sm:flex-row items-center  justify-center  p-6 md:p-12 gap-5 md:gap-10 mlh-prize-style hover:cursor-pointer"
        onClick={redirectToMLH}
      >
        <div className=" w-2/4 md:w-[35%]   ">
          {/* <img
            src="./Images/MLHIcons/mongodb.png"
            alt="First"
            className=" "
          ></img> */}

          <img src={`${props.img}`} alt="logo" className=" "></img>
        </div>
        <div className="mx-auto md:w-[65%]">
          <p className="price-heading text-center md:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl ">
            {props.title}
            <div className=" inline-block  text-NeonGreen mlh-arrow">
              {" "}
              →
            </div>{" "}
          </p>
          <p className=" mt-0 text-center md:text-left text-sm md:text-md lg:text-lg xl:text-lg">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default MLHPriceCard;
