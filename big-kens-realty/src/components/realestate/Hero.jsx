import { motion } from "framer-motion";
import bg from "../../assets/estate/bg.png";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } }
  };

  return (
    <section
      className="relative w-full h-[85vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Replace with your own image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8]"
        >
          Find Your Dream Home
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          Discover comfort, style, and the perfect place to call home with Big
          Kens Enterprises.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          variants={item}
          whileHover={{ y: -5 }}
          className="w-full bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl grid md:grid-cols-4 gap-4 text-black"
        >
          <select className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all">
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Bungalow</option>
          </select>

          <input
            type="text"
            placeholder="e.g. Abuja"
            className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
          />

          <select className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all">
            <option>1m - 10m Naira</option>
            <option>10m - 20m Naira</option>
            <option>20m+ Naira</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0D1425" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#0F1831] to-gray-900 text-white font-bold rounded-lg p-3 transition-all"
          >
            Search
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
