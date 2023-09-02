import "./App.css";
import About from "./components/About/About";
import Banner from "./components/BottomBanner/Banner";
import Contact from "./components/Contact/Contact";
import Crew from "./components/Crew/Crew";
import PlaceholderCrew from "./components/Crew/PlaceholderCrew";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Glimpse from "./components/Glimpse/Glimpse";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
import PlaceholderSponsor from "./components/Sponsors/PaceholderSponsors";
import Sponsors from "./components/Sponsors/Sponsors";
import Timeline from "./components/Timeline/Timeline";
import Tracks from "./components/Tracks/Tracks";
import Timer from "./components/Timer/Timer.jsx";
import React from "react";

const App = () => {
  return (
    <>
      <Navbar />
        <Timer />
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      {/* <Sponsors /> */}
      <PlaceholderSponsor />
      {/* <Crew /> */}
      <PlaceholderCrew />
      <Banner />
      <Glimpse />
      <section className="back w-full">
        <Faq />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
