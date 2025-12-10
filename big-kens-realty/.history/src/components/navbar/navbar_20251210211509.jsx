import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="w-full relative">

        <nav className="hidden lg:flex items-center justify-between px-20 py-5 bg-[#0c0e28] fixed top-0 left-0 right-0 z-[100]">
            <span className="inline-flex items-center justify-left gap-2">
                <img src={logo} className="h-[40px] w-[40px] object-contain rounded-full" alt="Big Ken Enterprises Logo" />
                <span className="text-xl font-bold text-white whitespace-nowrap">Big Ken Enterprises</span>
            </span>

            <div className="flex gap-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/" className="text-white hover:text-[#b5ffcb] transition-colors duration-300 px-3 py-2 rounded-md">
                      Home
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/about" className="text-white hover:text-[#b5ffcb] transition-colors duration-300 px-3 py-2 rounded-md">
                      About Us
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                  to="/real-estate"
                  className="text-white hover:text-[#b5ffcb] transition-colors duration-300 px-3 py-2 rounded-md"
                  >
                  Real Estate
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                  to="/auto-mobile"
                  className="text-white hover:text-[#b5ffcb] transition-colors duration-300 px-3 py-2 rounded-md"
                  >
                  Auto Mobile
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/music" className="text-white hover:text-[#b5ffcb] transition-colors duration-300 px-3 py-2 rounded-md">
                  Musicals
                  </Link>
                </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#9ae6af" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b5ffcb] text-black px-6 py-3 rounded-md font-bold transition-colors duration-300"
            >
                Sign In
            </motion.button>
        </nav>

        <nav className="flex lg:hidden items-center justify-between px-10 py-5 bg-[#0c0e28] fixed top-0 left-0 right-0 z-[100]">
            <span className="flex items-center justify-center gap-5">
                <img src={logo} className="h-[40px] w-[40px] object-contain rounded-full" alt="Big Ken Enterprises Logo" />
                <span className="text-1xl font-bold text-white whitespace-normal">Big Ken Enterprises</span>
            </span>

            <span className="flex items-center justify-between gap-5">

                {/* Menu Icon */}
                <motion.button
                  className="text-white p-2 rounded-md hover:bg-gray-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="h-8 w-8 text-white cursor-pointer" />
                  ) : (
                    <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
                  )}
                </motion.button>
            </span>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-20 left-0 w-full bg-[#0c0e28] z-[99] transition-all duration-300 ease-in-out lg:hidden ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-5 p-5">
            <motion.div whileHover={{ scale: 1.02 }} className="w-full">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-[#b5ffcb] transition-colors duration-300 w-full py-3 justify-center rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5 text-white" /> Home
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full">
              <Link
                to="/about"
                className="flex items-center gap-2 text-white hover:text-[#b5ffcb] transition-colors duration-300 w-full py-3 justify-center rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <InformationCircleIcon className="h-5 w-5 text-white" /> About Us
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full">
              <Link
                to="/real-estate"
                className="flex items-center gap-2 text-white hover:text-[#b5ffcb] transition-colors duration-300 w-full py-3 justify-center rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BuildingOfficeIcon className="h-5 w-5 text-white" /> Real Estate
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full">
              <Link
                to="/auto-mobile"
                className="flex items-center gap-2 text-white hover:text-[#b5ffcb] transition-colors duration-300 w-full py-3 justify-center rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <WrenchIcon className="h-5 w-5 text-white" /> Auto Mobile
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="w-full">
              <Link
                to="/music"
                className="flex items-center gap-2 text-white hover:text-[#b5ffcb] transition-colors duration-300 w-full py-3 justify-center rounded-lg hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MusicalNoteIcon className="h-5 w-5 text-white" /> Musicals
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#9ae6af" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#b5ffcb] text-black px-6 py-3 rounded-md font-bold transition-colors duration-300 w-full mt-2"
            >
                Sign In
            </motion.button>
          </div>
        </div>

    </div>

  );
}
