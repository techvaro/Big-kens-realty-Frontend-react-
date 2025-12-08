import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-5 bg-[#0c0e28] sticky top-0 z-50">
        <span className="flex items-center justify-center gap-10">
            <img src={logo} alt="Big Ken Enterprises Logo" className="h-10 w-10"/>
            <h2 className="text-red">Big Ken Enterprises</h2>
        </span>
      

      <div className="flex gap-6">
        <Link to="/" className="text-white hover:text-gray-300 transition">
          Home
        </Link>

        <Link to="/about" className="text-white hover:text-gray-300 transition">
          About Us
        </Link>

        <Link
          to="/real-estate"
          className="text-white hover:text-gray-300 transition"
        >
          Real Estate
        </Link>

        <Link
          to="/auto-mobile"
          className="text-white hover:text-gray-300 transition"
        >
          Auto Mobile
        </Link>

        <Link to="/music" className="text-white hover:text-gray-300 transition">
          Musicals
        </Link>

        <Link to="/contact" className="text-white hover:text-gray-300 transition">
          Contact
        </Link>
      </div>

      <button className="bg-[#b5ffcb] text-black px-6 py-3 rounded-md font-bold hover:bg-[#9ae6af] transition">
        Sign In
      </button>
    </nav>
  );
}
