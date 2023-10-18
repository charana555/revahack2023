import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const ParticipantsNavbar = (props) => {
  return (
    <div className="text-white  flex justify-between bg-primary sticky top-0  font-fira w-full px-[5%] pt-3 z-50 backdrop-filter backdrop-blur-lg bg-opacity-90">
      <Link to="/">
        <img
          src={"Images/reva-hack-logo.svg"}
          alt="logo"
          height={100}
          width={100}
          className="p-5"
        />
      </Link>

      <button className="flex items-center gap-1 hover:scale-125  transition-all duration-300 font-semibold ease-in-out text-xl">
        <Link to="/">
          <span className="underline-hover flex items-center gap-1 ">
            <MdArrowBackIosNew /> <p>Back </p>
          </span>
        </Link>
      </button>
    </div>
  );
};

export default ParticipantsNavbar;
