import { motion } from "framer-motion";
import heroImage from "../../assets/music/bg.jpg"; // replace with your image

export default function Hero() {
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
    <section className="relative">
      <img src={heroImage} alt="Studio" className="w-full h-[600px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 z-10"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-[#FCFCFC] mb-6"
        >
          Craft Your Sound
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl text-[#FCFCFC]/90 mb-8 max-w-2xl mx-auto"
        >
          High-quality recording, production, and artist support to bring your musical vision to life.
        </motion.p>
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05, backgroundColor: "#FCFCFC", color: "#1A1941" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#CAFFD3] to-[#b5ffcb] text-[#1A1941] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Your Session
        </motion.button>
      </motion.div>
    </section>
  );
}
