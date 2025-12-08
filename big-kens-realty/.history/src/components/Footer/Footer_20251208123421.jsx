import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c0e28] text-white py-16 px-5 md:px-20">
      
      {/* Top section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & description */}
        <div>
          <img src={logo} alt="Big Ken Enterprises Logo" className="h-10 w-10 object-contain" />
          <p className="mt-4 text-gray-300 text-sm">
            Big Ken Enterprises is your trusted partner in real estate, automobiles, and music production. Quality, passion, and innovation are our standard.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#76ffa8] transition">Home</a></li>
            <li><a href="/about" className="hover:text-[#76ffa8] transition">About Us</a></li>
            <li><a href="/real-estate" className="hover:text-[#76ffa8] transition">Real Estate</a></li>
            <li><a href="/auto-mobile" className="hover:text-[#76ffa8] transition">Auto Mobile</a></li>
            <li><a href="/music" className="hover:text-[#76ffa8] transition">Music</a></li>
            <li><a href="/contact" className="hover:text-[#76ffa8] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">123 Main Street, Abuja, Nigeria</p>
          <p className="text-gray-300 text-sm mt-1">Email: info@bigken.com</p>
          <p className="text-gray-300 text-sm mt-1">Phone: +234 800 123 4567</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-[#76ffa8] transition"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-[#76ffa8] transition"><FaTwitter /></a>
            <a href="#" className="text-white hover:text-[#76ffa8] transition"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-[#76ffa8] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom section */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Big Ken Enterprises. All rights reserved.
      </p>
    </footer>
  );
}
