import About from "./components/About/About";
import {
  default as Contact,
  default as Contact,
} from "./components/Contact/Contact";
import { default as Crew, default as Crew } from "./components/Crew/Crew";
import Card from "./components/Crew/components/Card";
import { default as Faq, default as Faq } from "./components/Faq/Faq";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Prizes from "./components/Prizes/Prizes";
import {
  default as Sponsers,
  default as Sponsers,
} from "./components/Sponsers/Sponsers";
import Timeline from "./components/Timeline/Timeline";

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
    </>
  );
};

export default App;
