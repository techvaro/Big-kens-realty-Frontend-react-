import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  return (
    <nav
      className="lg:flex md:hidden sm:hidden items-center justify-between px-20 py-5 bg-[#0c0e28] sticky top-0 z-50"
    >
        <span className="inline-flex items-center justify-center gap-3">
            <img src={logo} style={{ width: 40, height: 40 }} alt="" />
            <text className="text-xl font-bold text-white">Big Ken Enterprises</text>
        </span>
      

      <div style={{ display: "flex", gap: "25px" }}>
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
  );
}
