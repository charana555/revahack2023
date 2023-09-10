import React from "react";
import Socialicons from "./Socialicons";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="Contact"
      className=" text-white text-3xl w-full   px-[5%] py-8 md:px-[10%] md:py-16 gap-5 grid md:grid-cols-2 grid-cols-1"
    >
      <div className=" w-full h-[400px] px-2 xl:px-[20%]">
        <iframe
          className="w-full h-full"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7291172872892!2d77.63310401482352!3d13.116339290761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0xdee225fe28f600f6!2sREVA%20University!5e0!3m2!1sen!2sin!4v1665244381917!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" w-full  md:px-[10%] ">
        <h6 className="text-lg px-2 tracking-wider">Follow Us</h6>
        <Socialicons />

        <div className=" flex flex-col gap-2 mb-10">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1by9NGyLJzcqjX3p0KGob7mQ6R-gnzRnx/view?usp=sharing"
            className="text-lg px-2 tracking-wider block font-extralight"
          >
            Terms and Condition
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1FpOJjzjnOU767oO5ZKAEk1jQF-szScXY/view?usp=sharing"
            className="text-lg px-2 tracking-wider block font-extralight"
          >
            Privacy Policy
          </a>
          <a
            target="_blank"
            href="https://devfolio.co/code-of-conduct"
            className="text-lg px-2 tracking-wider block font-extralight"
          >
            Code of Conduct
          </a>
        </div>

        <div>
          <h6 className="text-lg tracking-wider px-2 pb-4">Contact Us</h6>

          <div className=" flex text-lg items-center gap-2  pb-2 px-2 tracking-wider">
            <AiOutlinePhone className="text-2xl font-extrabold" /> +91 90355
            05082
          </div>
          <div className=" flex text-lg items-center gap-2  pb-2 px-2 tracking-wider">
            <AiOutlinePhone className="text-2xl font-extrabold" /> +91 88618
            30388
          </div>
          <div className=" flex text-lg items-center gap-2  px-2 tracking-wider">
            <AiOutlineMail className="text-2xl font-extrabold" />{" "}
            revahack@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
