import React from "react";
import "../App.css";
import About from "../components/About/About";
import SelectedParticipants from "./SelectedParticipants";
import Banner from "../components/BottomBanner/Banner";
import Contact from "../components/Contact/Contact";
import Crew from "../components/Crew/Crew";
import PlaceholderCrew from "../components/Crew/PlaceholderCrew";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Glimpse from "../components/Glimpse/Glimpse";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Prizes from "../components/Prizes/Prizes";
import Speakers from "../components/Speakers/Speakers";
import PlaceholderSponsor from "../components/Sponsors/PaceholderSponsors";
import Sponsors from "../components/Sponsors/Sponsors";
import Timeline from "../components/Timeline/Timeline";
import TimelineA from "../components/Timeline/Timeline2";
import Tracks2 from "../components/Tracks/Tracks2";
import Tracks2Mobile from "../components/Tracks/Tracks2Mobile";

const Main = (props) => {
  return (
    <>
      <>
        <Navbar />
        <div
          className="hidden md:block fixed top-0 right-0 mr-14"
          style={{ zIndex: 9999 }}
        >
          <img
            src="Images/ieee_banner.svg"
            alt="ieee-logo"
            className="h-[10rem]"
          />
        </div>
        <div
          className="block md:hidden absolute top-20 left-0"
          style={{ zIndex: 9999 }}
        >
          <img
            src="Images/ieee_banner_mob.svg"
            alt="ieee-logo"
            className="h-[4rem]"
          />
        </div>
        {/* <section className="back w-full"> */}
        <Hero />
        <About />
        {/* </section> */}
        <Tracks2 />
        <Prizes />
        <Speakers />
        {/* <Timeline /> */}
        <TimelineA />
        <Sponsors />
        <Crew />
        <SelectedParticipants />
        <Banner />
        <Glimpse />
        <section className="back w-full">
          <Faq />
          <Contact />
        </section>
        <Footer />
      </>
    </>
  );
};

export default Main;
