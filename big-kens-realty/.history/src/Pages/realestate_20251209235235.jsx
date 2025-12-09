import Navbar from "../components/navbar/navbar";
import Hero from "../components/realestate/Hero";
import Listings from "../components/realestate/Listings";
import Footer from "../components/Footer/Footer";
import Choose from "../components/realestate/Choose";

export default function estate() {
  return (
    <>
      <Navbar />

      <Hero />

      <Listings />

      <Choose />

      <Footer />
    </>
  );
}
