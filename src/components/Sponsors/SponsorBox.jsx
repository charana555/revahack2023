import React from "react";

import "./Sponsers.css";

const SponsorBox = (props) => {
  return (
    <div className="slide glassmorphic mx-[5px] md:mx-[10px]  flex items-center ">
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default SponsorBox;
