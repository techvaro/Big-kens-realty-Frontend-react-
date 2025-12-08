import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import About from "../components/Home/About";
import About from "../components/Home/FeaturedProperties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <FeaturedProperties />
    </>
  );
}
