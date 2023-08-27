import React from "react";
import "./AboutStyles.css";
const About = () => {
  return (
    <section
      id="About"
      className="flex-col text-white 	 w-[100%]  flex items-center justify-center px-[10%]"
    >
      <div className="text-[#939AFF] mb-[20px] text-6xl md:text-7xl font-roboto font-medium ">
        About Us
      </div>
      <div className="flex flex-col gap-6 font-fira text-lg md:text-[22px]">
        <div>
          <span className=" text-xl md:text-2xl font-semibold"> REVA HACK</span>{" "}
          is an annual tech and innovation fest organized by The Hackathon Club
          at REVA University, the yearly event has only seen growth year over
          year since its inception in 2016. Once started as a university-wide
          event, REVA HACK now sees participants from all over the world
          showcasing their creativity and displaying their drive to innovate.
        </div>
        <div>
          Today <span className=" font-semibold"> REVA HACK</span> has become
          our University's flagship technological event that welcomes over a
          thousand participants every year. Despite the pandemic over the last
          few years, <span className=" font-semibold"> REVA HACK</span> has
          managed to adapt to the new norm by embracing the virtual hackathon
          model. This move in turn helped us expand our reach and welcome more
          participants in the past few years.
        </div>
        <div>
          <span className=" font-semibold"> REVA HACK</span> 2021 was a landmark
          event for the club with over 2500+ registered entrants and prices over
          INR 2.5 Cr. <span className=" font-semibold"> REVA HACK</span>'s
          schedule also accommodates pre-event workshops, learnathons, and
          semi-formal engagement events like Kahoots, stressbusters, etc. that
          come with goodies.
        </div>
        <p className="inline-block text">
          Our mission at The Hackathon Club is to fuel your innovation and{" "}
          <span className=" font-semibold"> REVA HACK</span> is our way of doing
          just that.
        </p>
      </div>
      {/* <p>About</p>
      <p className=" text-4xl text-secondary drop-shadow-lg shadow-secondary ">
        Comming Soon . . .
      </p> */}
    </section>
  );
};

export default About;
