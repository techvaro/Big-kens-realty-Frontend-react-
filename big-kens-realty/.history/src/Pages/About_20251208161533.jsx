import Navbar from "../components/navbar/navbar";
import Hero from "../components/About/Hero";
import MissionValues from "../components/About/mission";
import Timeline from "../components/About/Timeline";
import Team from "../components/About/Team";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionValues />
      <Timeline />
      <Team />
    </>
  );
}
