import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 80px",
        background: "#0c0e28",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
        <span className="flex items-center justify-between flex-row gap-10">
            <img src={logo} alt="" className="h-[20px] w-[2px]"/>
            <h2 style={{ color: "white" }} className="text-4xl font-bold text-blue-600">Big Ken Enterprises</h2>
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
