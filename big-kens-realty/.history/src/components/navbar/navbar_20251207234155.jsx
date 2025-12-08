import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import {
    Bars3Icon,
    HomeIcon,
    InformationCircleIcon,
    BuildingOfficeIcon,
    WrenchIcon,
    MusicalNoteIcon,
    PhoneIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
        <nav className="hidden lg:flex items-center justify-between px-10 py-5 bg-[#0c0e28] sticky top-0 z-50">
            <span className="inline-flex items-center justify-left gap-2">
                <img src={logo} className="h-[40px] w-[40px] object-contain" alt="Big Ken Enterprises Logo" />
                <span className="text-xl font-bold text-white">Big Ken Enterprises</span>
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

        <nav className="flex lg:hidden items-center justify-between px-10 py-5 bg-[#0c0e28] sticky top-0 z-50">
            <span className="inline-flex items-center justify-center gap-1">
                <img src={logo} className="h-[40px] w-[40px] object-contain" alt="Big Ken Enterprises Logo" />
                <span className="text-xl font-bold text-white">Big Ken Enterprises</span>
            </span>

            <span className="flex items-center justify-between gap-5">
                <button className="bg-[#b5ffcb] text-black px-6 py-3 rounded-md font-bold hover:bg-[#9ae6af] transition">
                    Sign In
                </button>

                {/* Menu Icon */}
                <button
                  className="text-white"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-8 w-8 text-white cursor-pointer" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
                  )}
                </button>
            </span>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 left-0 w-full bg-[#0c0e28] z-40 transition-all duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <Link
              to="/"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HomeIcon className="h-5 w-5 text-white" /> Home
            </Link>

            <Link
              to="/about"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <InformationCircleIcon className="h-5 w-5 text-white" /> About Us
            </Link>

            <Link
              to="/real-estate"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BuildingOfficeIcon className="h-5 w-5 text-white" /> Real Estate
            </Link>

            <Link
              to="/auto-mobile"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <WrenchIcon className="h-5 w-5 text-white" /> Auto Mobile
            </Link>

            <Link
              to="/music"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MusicalNoteIcon className="h-5 w-5 text-white" /> Musicals
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition w-full py-2 justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PhoneIcon className="h-5 w-5 text-white" /> Contact
            </Link>
            <button className="bg-[#b5ffcb] text-black px-6 py-3 rounded-md font-bold hover:bg-[#9ae6af] transition w-full">
                Sign In
            </button>
          </div>
        </div>

    </div>
    
  );
}
