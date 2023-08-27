import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Crew from "./components/Crew/Crew";
import Card from "./components/Crew/components/Card";
import Faq from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
import Sponsers from "./components/Sponsers/Sponsers";
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
      <Sponsers />
      <Crew />
      <Faq />
      <Contact />
    </>
  );
};

export default App;
