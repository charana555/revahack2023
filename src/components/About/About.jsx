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
      <div className="flex flex-col text-center sm:text-justify  gap-8 md:gap-12 font-fira font-light text-sm  md:text-lg xl:text-xl mx-5">
        <div>
          <span className="font-regular"> REVA HACK</span> 2023, powered by
          Bluelearn and in close collaboration with GDSC, promises an
          exceptional tech experience. Bluelearn, our Hiring Partner, is
          dedicated to nurturing future tech talent, while The Phoenix Guild,
          our Community Partner, strengthens our commitment to innovation,
          alongside OS Code Community: the largest offline, multi-college
          community that assists us in unlocking the power of innovation."
        </div>
        <div>
          Welcome to the pinnacle of tech events! Organized annually by the
          Hackathon Club of REVA University since 2016,{" "}
          <span className="font-regular"> REVA HACK</span> has grown from a
          modest university event to a global phenomenon.
        </div>
        <div>
          As the flagship tech extravaganza of REVA University,{" "}
          <span className="font-regular"> REVA HACK</span> has evolved into a
          magnetic force, attracting brilliant minds worldwide. In 2022, it left
          an enduring mark with over 1,500 enthusiastic participants vying for
          prizes worth INR 7.5 crore, generously sponsored by MLH. MLH's
          unwavering focus on fostering collaboration and teamwork has
          consistently yielded groundbreaking projects and invaluable
          connections.
        </div>
        <div>
          <span className="font-regular"> REVA HACK</span> transcends
          traditional hackathons; it's an immersive experience. Dive into
          cutting-edge workshops, immersive learning sessions, and engaging
          activities. Brace for surprises, stress-relief activities, and
          exclusive swag. At The Hackathon Club, we embody innovation, and{" "}
          <span className="font-regular"> REVA HACK</span> brings that vision to
          life.
        </div>
        <div>
          This year, we raise the stakes with a thrilling 36-hour on-site
          hackathon. Prepare for a tech-filled extravaganza featuring
          captivating tech talks by industry titans, pulse-pounding events, and
          exclusive giveaways. Join us at{" "}
          <span className="font-regular"> REVA HACK</span> 2023 - the ultimate
          tech adventure awaits!
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
