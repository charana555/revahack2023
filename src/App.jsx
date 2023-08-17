import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Tracks from "./components/Tracks/Tracks";
import Prizes from "./components/Prizes/Prizes";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Faq from "./components/Faq/Faq";
import Sponsers from "./components/Sponsers/Sponsers";
import Crew from "./components/Crew/Crew";

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
