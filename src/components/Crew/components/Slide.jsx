import React from "react";
import Card from "./Card";
import MembersCard from "./MembersCard";

const Slide = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center gap-10">
        <div
          id="teamName"
          className=" p-3 md:p-6 border-solid border border-white mx-auto w-[80%] md:w-[60%]   rounded-2xl text-3xl md:text-6xl font-roboto font-bold text-center"
        >
          {props.team.teamName}
        </div>

        <div id="teamLead" className="flex flex-wrap gap-8 justify-center">
          {props.team.lead1.name !== "" && (
            <Card
              photo={props.team.lead1.photo}
              title={props.team.lead1.title}
              name={props.team.lead1.name}
              insta={props.team.lead1.insta}
              github={props.team.lead1.github}
              linkedin={props.team.lead1.linkedin}
            />
          )}
          {props.team.lead2.name && (
            <Card
              photo={props.team.lead2.photo}
              title={props.team.lead2.title}
              name={props.team.lead2.name}
              insta={props.team.lead2.insta}
              github={props.team.lead2.github}
              linkedin={props.team.lead2.linkedin}
            />
          )}
        </div>

        <div
          id="teamName"
          className=" p-3 font-medium text-2xl md:text-3xl text-center"
        >
          Members
        </div>

        <div id="teamMembers" className="flex flex-wrap justify-center gap-8">
          {props.team.member1.name !== "" && (
            <MembersCard
              photo={props.team.member1.photo}
              name={props.team.member1.name}
              insta={props.team.member1.insta}
              github={props.team.member1.github}
              linkedin={props.team.member1.linkedin}
            />
          )}
          {props.team.member2.name !== "" && (
            <MembersCard
              photo={props.team.member2.photo}
              name={props.team.member2.name}
              insta={props.team.member2.insta}
              github={props.team.member2.github}
              linkedin={props.team.member2.linkedin}
            />
          )}
          {props.team.member3.name !== "" && (
            <MembersCard
              photo={props.team.member3.photo}
              name={props.team.member3.name}
              insta={props.team.member3.insta}
              github={props.team.member3.github}
              linkedin={props.team.member3.linkedin}
            />
          )}
          {props.team.member4.name !== "" && (
            <MembersCard
              photo={props.team.member4.photo}
              name={props.team.member4.name}
              insta={props.team.member4.insta}
              github={props.team.member4.github}
              linkedin={props.team.member4.linkedin}
            />
          )}

          {props.team.member5.name !== "" && (
            <MembersCard
              photo={props.team.member5.photo}
              name={props.team.member5.name}
              insta={props.team.member5.insta}
              github={props.team.member5.github}
              linkedin={props.team.member5.linkedin}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Slide;
