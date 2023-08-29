import About from "./components/About/About";
import Banner from "./components/BottomBanner/Banner";
import Contact from "./components/Contact/Contact";
import Crew from "./components/Crew/Crew";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Glimpse from "./components/Glimpse/Glimpse";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
// import Sponsers from "./components/Sponsers/Sponsers";
import Sponsors from "./components/Sponsors/Sponsors";
import Timeline from "./components/Timeline/Timeline";

import Tracks from "./components/Tracks/Tracks";

import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Prizes />
      <Timeline />
      <Sponsors />
      <Crew />
      <Banner />
      <Glimpse />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
