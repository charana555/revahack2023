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
  const BlockchainIcon = "./TrackIcons/blockchain.png";

  const IOTicon = "./TrackIcons/iot.png";
  const arvrIcon = "./TrackIcons/arvr.png";
  const cybersecIcon = "./TrackIcons/cybersec.png";
  const genaiIcon = "./TrackIcons/genai.png";
  const oppeninnoIcon = "./TrackIcons/openinno.png";

  const blockchainData = participants[0].blockchain;
  const arvrData = participants[0].arvr;
  const cybersecData = participants[0].cybersec;
  const genAIData = participants[0].genAI;
  const openinnoData = participants[0].openinno;
  const iot = participants[0].IOT;
  return (
    <>
      <ParticipantsNavbar />
      <div className="text-NeonPurple text-[50px] md:text-[72px] font-roboto font-medium text-center my-10">
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
