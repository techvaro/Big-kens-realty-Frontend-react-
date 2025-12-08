import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import About from "../components/Home/About";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import AutomobileSale from "../components/Home/AutomobileSale";

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
