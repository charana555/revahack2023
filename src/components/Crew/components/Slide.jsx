import React from "react";
import Card from "./Card";
import MembersCard from "./MembersCard";

const Slide = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-10">
        <div
          id="teamName"
          className=" p-3 border-solid border border-white mx-[5%]   rounded-2xl text-4xl md:text-5xl font-roboto font-bold"
        >
          {props.team.teamName}
        </div>

        <div id="teamLead" className="flex flex-wrap gap-8 justify-center">
          <Card
            photo={props.team.lead1.photo}
            title={props.team.lead1.title}
            name={props.team.lead1.name}
            insta={props.team.lead1.insta}
            github={props.team.lead1.github}
            linkedin={props.team.lead1.linkedin}
          />
          <Card
            photo={props.team.lead2.photo}
            title={props.team.lead2.title}
            name={props.team.lead2.name}
            insta={props.team.lead2.insta}
            github={props.team.lead2.github}
            linkedin={props.team.lead2.linkedin}
          />
        </div>

        <div id="teamName" className=" p-3 font-medium text-2xl md:text-3xl">
          Members
        </div>

        <div id="teamMembers" className="flex flex-wrap justify-center gap-8">
          <MembersCard
            photo={props.team.member1.photo}
            name={props.team.member1.name}
            insta={props.team.member1.insta}
            github={props.team.member1.github}
            linkedin={props.team.member1.linkedin}
          />
          <MembersCard
            photo={props.team.member2.photo}
            name={props.team.member2.name}
            insta={props.team.member2.insta}
            github={props.team.member2.github}
            linkedin={props.team.member2.linkedin}
          />
          <MembersCard
            photo={props.team.member3.photo}
            name={props.team.member3.name}
            insta={props.team.member3.insta}
            github={props.team.member3.github}
            linkedin={props.team.member3.linkedin}
          />
          <MembersCard
            photo={props.team.member4.photo}
            name={props.team.member4.name}
            insta={props.team.member4.insta}
            github={props.team.member4.github}
            linkedin={props.team.member4.linkedin}
          />
        </div>
      </div>
    </>
  );
};

export default Slide;
