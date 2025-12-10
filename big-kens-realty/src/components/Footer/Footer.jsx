import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/image/logo.png";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaTwitter />, name: "Twitter" },
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaLinkedinIn />, name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-[#0c0e28] text-white py-16 px-5 md:px-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#76ffa8] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#b5ffcb] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-[#0c0e28] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={logo} alt="Big Ken Enterprises Logo" className="h-12 w-12 object-contain rounded-full" />
            </motion.div>
            <p className="mt-4 text-gray-300 text-sm">
              Big Ken Enterprises is your trusted partner in real estate, automobiles, and music production. Quality, passion, and innovation are our standard.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Real Estate', 'Auto Mobile', 'Music', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-[#76ffa8] transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <motion.p
              className="text-gray-300 text-sm flex items-start"
              whileHover={{ x: 3 }}
            >
              <span className="mr-2">📍</span> 123 Main Street, Abuja, Nigeria
            </motion.p>
            <motion.p
              className="text-gray-300 text-sm mt-1 flex items-start"
              whileHover={{ x: 3 }}
            >
              <span className="mr-2">✉️</span> Email: info@bigken.com
            </motion.p>
            <motion.p
              className="text-gray-300 text-sm mt-1 flex items-start"
              whileHover={{ x: 3 }}
            >
              <span className="mr-2">📞</span> Phone: +234 800 123 4567
            </motion.p>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    y: -5,
                    scale: 1.2,
                    color: "#76ffa8",
                    backgroundColor: "rgba(118, 255, 168, 0.1)",
                    borderRadius: "50%"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-[#76ffa8] transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />

        {/* Bottom section */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Big Ken Enterprises. All rights reserved.
        </motion.p>
      </div>

      {/* Add CSS for the blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </footer>
  );
}
