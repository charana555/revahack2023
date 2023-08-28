import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Tracks from "./components/Tracks/Tracks";
import Prizes from "./components/Prizes/Prizes";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Sponsors from "./components/Sponsors/Sponsors";
import Crew from "./components/Crew/Crew";
import Footer from "./components/Footer/Footer";

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
      <section className="back w-full">
        <Faq />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default App;
