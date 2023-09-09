import React from "react";
import "./AboutStyles.css";
const About = () => {
  return (
    <section
      id="About"
      className="flex-col text-white 	 w-[100%]  flex items-center justify-center px-[5%] md:px-[10%]"
    >
      <div className="text-NeonPurple  my-[1.5rem] md:my-[4rem] text-[50px] md:text-[72px] font-roboto font-medium ">
        About Us
      </div>
      <div className="flex flex-col text-center sm:text-justify  gap-8 md:gap-12 font-fira font-light text-sm  md:text-xl xl:text-2xl mx-5">
        <div>
          <span className="font-semibold"> REVA HACK</span>, a renowned tech
          event organized annually by the Hackathon Club of REVA University, has
          been a hub of innovation since its inception in 2016. What initially
          started as an event within the university premises has now gained
          recognition, drawing exceptional talents from various parts of the
          world.
        </div>
        <div>
          <span className="font-semibold"> REVA HACK</span>, the flagship event
          of REVA University in the tech field, now attracts thousands of
          participants, making it a gathering for aspiring innovators and tech
          enthusiasts. The 2022 edition was truly remarkable, with more than
          1,500 passionate participants and prizes worth INR 5 crore.
        </div>
        <div>
          But <span className="font-semibold"> REVA HACK</span> is not just a
          competition; it offers an experience. The event includes a variety of
          workshops, immersive learning sessions, and a range of engaging
          activities that go beyond just Kahoot games to include refreshing
          stress relievers. As an added bonus, participants can also look
          forward to receiving goodies and swag. At The Hackathon Club, our
          mission is to promote innovation, and through REVA HACK, we bring this
          vision to life in a way.
        </div>
        <div>
          This year, we're rolling out a 36-hour on-site hackathon. Featuring an
          array of tech talks from industry experts, exhilarating events,
          exclusive giveaways, and so much more. Join us for a tech extravaganza
          like no other!
        </div>
      </div>
      {/* <p>About</p>
      <p className=" text-4xl text-secondary drop-shadow-lg shadow-secondary ">
        Comming Soon . . .
      </p> */}
    </section>
  );
};

export default About;
