import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Crew from "./components/Crew/Crew";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
import Sponsors from "./components/Sponsors/Sponsors";
import Timeline from "./components/Timeline/Timeline";
import Tracks from "./components/Tracks/Tracks";

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
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
