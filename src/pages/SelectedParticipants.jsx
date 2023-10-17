import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ParticipantsNavbar from "../components/Participants/ParticipantsNavbar";
import TeamCard from "../components/Participants/TeamCard";
import TrackSection from "../components/Participants/TrackSection";

import { participants } from "../data/participantsData.js";
// import "./participants.css";
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
  const BlockchainIcon = "src/components/Participants/Icons/blockchain.png";

  const IOTicon = "src/components/Participants/Icons/iot.png";
  const arvrIcon = "src/components/Participants/Icons/arvr.png";
  const cybersecIcon = "src/components/Participants/Icons/cybersec.png";
  const genaiIcon = "src/components/Participants/Icons/genai.png";
  const oppeninnoIcon = "src/components/Participants/Icons/openinno.png";

  const blockchainData = participants[0].blockchain;
  const arvrData = participants[0].arvr;
  const cybersecData = participants[0].cybersec;
  const genAIData = participants[0].genAI;
  const openinnoData = participants[0].openinno;
  const iot = participants[0].IOT;
  return (
    <>
      <ParticipantsNavbar />
      <div className="text-LushGreen  text-[50px] md:text-[72px] font-roboto font-medium text-center my-10">
        Participants
      </div>
      {/* <TeamCard /> */}
      <TrackSection
        icon={BlockchainIcon}
        track={blockchainData}
        trackName={"BLOCKCHAIN"}
      />

      <TrackSection icon={arvrIcon} track={arvrData} trackName={"AR/VR"} />
      <TrackSection
        icon={cybersecIcon}
        track={cybersecData}
        trackName={"CYBERSECURITY"}
      />
      <TrackSection icon={genaiIcon} track={genAIData} trackName={"GEN AI"} />
      <TrackSection
        icon={oppeninnoIcon}
        track={openinnoData}
        trackName={"OPEN INNOVATION"}
      />
      <TrackSection icon={IOTicon} track={iot} trackName={"IOT & CLOUD"} />
      <Contact />
      <Footer />
    </>
  );
};

export default SelectedParticipants;
