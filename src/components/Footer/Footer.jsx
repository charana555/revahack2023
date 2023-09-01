import React from "react";

const Footer = () => {
  return (
    <section className=" bg-black flex-wrap text-white flex justify-between w-full px-[10%] p-3 tracking-wider">
      <p> CopyRight &copy; 2023 All Right Reserved </p>
      <p>|</p>
      <p>
        Made with <span className="text-red-500">{"<3"}</span> By REVAHACK.COM
      </p>
    </section>
  );
};

export default Footer;
