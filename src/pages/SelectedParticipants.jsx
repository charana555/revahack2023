import React from "react";
import "./participants.css";
import { participants } from "../data/participantsData.js";
{
  /* checklist
    [] make a simplified navbar
    [] Add a button to go back to main page
    [] make filter buttons to filter out tracks
    [] make glassmorphics cards 
    [] make it responsive
*/
}

const SelectedParticipants = (props) => {
  return (
    <section
      id="participants"
      className="flex-col text-white text-3xl w-full flex items-center my-[5%]"
    >
      <div className="text-LushGreen  text-[50px] md:text-[72px] font-roboto font-medium ">
        Participants
      </div>

      <div className="flex flex-wrap gap-1 md:gap-[1px] px-4 items-center justify-center">
          {participants.map((participant, index) => (
            <div key={index} className="text-xl p-5 m-10 glassmorphic flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">{participant.teamName}</div>
                <div className="text-xl">{participant.track}</div>
                <div className="text-xl">{participant.leadername}</div>
                <div className="text-xl">{participant.college}</div>
                <div className="text-xl">{participant.city}</div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SelectedParticipants;
