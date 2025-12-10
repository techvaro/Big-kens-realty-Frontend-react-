import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Car/Hero";
import Cars from "../components/Car/cars";
import Buy from "../components/Car/buy";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Cars />

      <Buy />

      <Footer />
    </>
  );
}
