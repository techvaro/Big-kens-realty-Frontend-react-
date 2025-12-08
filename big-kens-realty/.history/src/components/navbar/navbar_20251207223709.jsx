import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { 
    Bars3Icon,
    HomeIcon,
    InformationCircleIcon,
    BuildingOfficeIcon,
    WrenchIcon,
    MusicalNoteIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div>
        <nav
        className="hidden lg:flex items-center justify-between px-20 py-5 bg-[#0c0e28] sticky top-0 z-50"
            >
                <span className="inline-flex items-center justify-center gap-3">
                    <img src={logo} style={{ width: 40, height: 40 }} alt="" />
                    <text className="text-xl font-bold text-white">Big Ken Enterprises</text>
                </span>
            

            <div style={{ display: "flex", gap: "25px" }} className="lg:hidden">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
                </Link>

                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                About Us
                </Link>

                <Link
                to="/real-estate"
                style={{ color: "white", textDecoration: "none" }}
                >
                Real Estate
                </Link>

                <Link
                to="/auto-mobile"
                style={{ color: "white", textDecoration: "none" }}
                >
                Auto Mobile
                </Link>

                <Link to="/music" style={{ color: "white", textDecoration: "none" }}>
                Musicals
                </Link>

                <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                Contact
                </Link>
            </div>

            <button className="btn">Sign In</button>
        </nav>

        <nav className="flex lg:hidden items-center justify-between px-7 py-5 bg-[#0c0e28] sticky top-0 z-50">
            <span className="inline-flex items-center justify-center gap-3">
                <img src={logo} style={{ width: 40, height: 40 }} alt="" />
                <span className="text-1xl font-bold text-white">Big Ken Enterprises</span>
            </span>

            <span className="flex items-center justify-between gap-5">
                <button className="btn1">Sign In</button>

                {/* Hidden Checkbox */}
                <input type="checkbox" id="check1" className="peer" />

                {/* Menu Icon */}
                <label htmlFor="check1">
                    <Bars3Icon className="h-8 w-8 text-white cursor-pointer" />
                </label>
            </span>
        </nav>

        <span className="
            flex flex-col lg:hidden items-center justify-center gap-5 p-5 bg-[#0c0e28]
            absolute top-16 right-[-100%] w-full z-50
            transition-all duration-500 ease-in-out
            peer-checked:right-0
        ">
            <Link to="/" className="flex items-center gap-2 text-white">
                <HomeIcon className="h-5 w-5 text-white" /> Home
            </Link>

            <Link to="/about" className="flex items-center gap-2 text-white">
                <InformationCircleIcon className="h-5 w-5 text-white" /> About Us
            </Link>

            <Link to="/real-estate" className="flex items-center gap-2 text-white">
                <BuildingOfficeIcon className="h-5 w-5 text-white" /> Real Estate
            </Link>

            <Link to="/auto-mobile" className="flex items-center gap-2 text-white">
                <WrenchIcon className="h-5 w-5 text-white" /> Auto Mobile
            </Link>

            <Link to="/music" className="flex items-center gap-2 text-white">
                <MusicalNoteIcon className="h-5 w-5 text-white" /> Musicals
            </Link>

            <Link to="/contact" className="flex items-center gap-2 text-white">
                <PhoneIcon className="h-5 w-5 text-white" /> Contact
            </Link>
        </span>

    </div>
    
  );
}
