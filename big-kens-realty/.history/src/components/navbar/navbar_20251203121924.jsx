import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-5 bg-[#0c0e28] sticky top-0 z-50"
    >
      {/* Logo + Title */}
      <span className="flex items-center gap-3">
        <img src={logo} className="w-10 h-10" alt="Logo" />
        <span className="text-xl font-bold text-white">
          Big Ken Enterprises
        </span>
      </span>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/auto-mobile">Auto Mobile</Link>
        <Link to="/music">Musicals</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Button */}
      <button className="hidden md:block bg-white text-black px-4 py-2 rounded-md">
        Sign In
      </button>
    </nav>
  );
}
