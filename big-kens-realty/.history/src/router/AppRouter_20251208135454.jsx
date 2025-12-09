import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

// Placeholder components for routes that don't exist yet
const About = () => <div>About Page</div>;
const RealEstate = () => <div>Real Estate Page</div>;
const AutoMobile = () => <div>Auto Mobile Page</div>;
const Music = () => <div>Music Page</div>;
const Contact = () => <div>Contact Page</div>;

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/auto-mobile" element={<AutoMobile />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
