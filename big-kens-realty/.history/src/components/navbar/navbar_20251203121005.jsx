import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0c0e28] sticky top-0 z-50 px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <span className="flex items-center gap-3">
        <img src={logo} className="w-10 h-10" alt="" />
        <span className="text-xl font-bold text-white">Big Ken Enterprises</span>
      </span>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/real-estate">Real Estate</Link>
        <Link to="/auto-mobile">Auto Mobile</Link>
        <Link to="/music">Musicals</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Desktop Button */}
      <button className="hidden lg:block bg-white text-black px-4 py-2 rounded-md">
        Sign In
      </button>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0c0e28] flex flex-col items-start px-6 py-4 gap-4 text-white lg:hidden">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/real-estate" onClick={() => setOpen(false)}>Real Estate</Link>
          <Link to="/auto-mobile" onClick={() => setOpen(false)}>Auto Mobile</Link>
          <Link to="/music" onClick={() => setOpen(false)}>Musicals</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <button className="mt-2 bg-white text-black px-4 py-2 rounded-md w-full text-left">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
