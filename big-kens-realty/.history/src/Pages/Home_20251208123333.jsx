import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Home/hero";
import Services from "../components/Home/Services";
import Stats from "../components/Home/Stats";
import About from "../components/Home/About";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import AutoMobileSales from "../components/Home/AutoMobileSale";
import RecentProductions from "../components/Home/RecentProductions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <FeaturedProperties />
      <AutoMobileSales />
      <RecentProductions />
    </>
  );
}
