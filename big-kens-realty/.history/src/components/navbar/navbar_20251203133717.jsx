import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";

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

        <nav
        className="flex lg:hidden items-center justify-between px-20 py-5 bg-[#0c0e28] sticky top-0 z-50"
            >
                <span className="inline-flex items-center justify-center gap-3">
                    <img src={logo} style={{ width: 40, height: 40 }} alt="" />
                    <text className="text-xl font-bold text-white">Big Ken Enterprises</text>
                </span>

            <span className="flex lg:hidden items-center justify-between gap-5">
                <button className="btn">Sign In</button>
                <input type="checkbox" id="check1" className="hidden"/>
                <label htmlFor="check1">
                    <Bars3Icon className="h-8 w-8 text-white" />
                </label>
                
            </span>

            <span className="flex flex-col items-center justify-center gap-5 p-5 bg-[#0c0e28] sticky top-16 z-50">
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
            </span>
            
            
        </nav>
    </div>
    
  );
}
