import React from "react";
import { participants } from "../../data/participantsData";
import blockchain from "./Icons/blockchain.png";
import TeamCard from "./TeamCard";
import "./TeamCard.css";
const TrackSection = (props) => {
  // const trackData = participants[0].blockchain;
  const trackData = props.track;

  return (
    <>
      <section>
        <div className="mx-[5%] md:mx-[7%] xl:mx-[10%] ">
          <div className="flex items-center gap-4 md:gap-8 py-12 ">
            <div className="w-[60px] lg:w-[100px]">
              <img className="w-[100%]" src={props.icon} alt="track logo" />
            </div>

            <div className="text-4xl md:text-5xl font-fira text-white">
              {props.trackName}
            </div>
          </div>

          <div
            id="cards"
            className="flex flex-wrap gap-10 justify-evenly 2xl:justify-start 2xl:pl-[3%]  "
          >
            {/* <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard /> */}
            {trackData.map((team) => (
              <TeamCard
                key={team.teamId}
                teamId={team.teamId}
                projName={team.projName}
                pptLink={team.pptLink}
                teamName={team.teamName}
                teamLead={team.teamLead}
                loc={team.loc}
              />
            ))}
          </div>
        </div>
        <div className="h-[1px] w-[85%] mx-auto opacity-60 bg-white my-14"></div>
      </section>{" "}
    </>
  );
};

export default TrackSection;
