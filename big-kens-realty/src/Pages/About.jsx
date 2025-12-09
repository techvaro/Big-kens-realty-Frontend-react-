import Navbar from "../components/navbar/navbar";
import Hero from "../components/About/Hero";
import MissionValues from "../components/About/mission";
import Timeline from "../components/About/Timeline";
import Team from "../components/About/Team";
import Contact from "../components/About/contact";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionValues />
      <Timeline />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
