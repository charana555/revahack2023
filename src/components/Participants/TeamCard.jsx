import React from "react";
import { Link } from "react-router-dom";
import collegeLoc from "./Icons/college.svg";
import teamLead from "./Icons/teamLead.svg";

const TeamCard = (props) => {
  window.onload = function () {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  };

  return (
    <div
      className={`flex  justify-start text-left text-white
    font-fira px-4 md:px-6 py-4 flex-col  min-w-[350px]  max-w-[100px] md:h-[180px]  hover:scale-105 transition-all duration-200 ease-in-out teambg `}
    >
      <p className=" text-[20px] md:text-[22px] font-semibold ">
        {props.projName}
      </p>

      <p className="text-[16px] md:text-[18px] ml-2 my-1">
        <sup className="px-2 font-thin opacity-80">by</sup>
        {props.teamName.toUpperCase()}
      </p>
      <div className=" ml-4 text-[10px] md:text-[14px] font-extralight ">
        <div id="leadDeets" className="flex gap-2 my-1">
          <div id="leadIcon">
            <img src={teamLead} dsad className="pl-[2px]" alt="" width="18" />
          </div>
          <div id="leadName">{props.teamLead} </div>
        </div>
        {props.loc !== "" && (
          <div id="collegeDeets" className="flex gap-2">
            <div id="collegeIcon  ">
              <img src={collegeLoc} alt="" width="18" />
            </div>
            <div id="collegeName"> {props.loc} </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
