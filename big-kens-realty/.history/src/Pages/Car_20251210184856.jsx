import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Car/Hero";
import Cars from "../components/Car/cars";
import Buy from "../components/Car/buy";
import Testimony from "../components/Car/Testimony";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Cars />

      <Buy />

      <Testimony />

      <Footer />
    </>
  );
}
