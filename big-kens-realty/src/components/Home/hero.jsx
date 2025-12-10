import { motion } from "framer-motion";
import heroImage from '../../assets/image/bg.png';

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
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "120px",
        paddingBottom: "150px"
      }}
      className="relative overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={item}
          style={{ fontSize: "50px", fontWeight: "bold" }}
          className="mb-6"
        >
          Big Kens Enterprises<br />
          Powering <span style={{ color: "#76ffa8" }}>Your Lifestyle.</span>
        </motion.h1>

        <motion.p
          variants={item}
          style={{ width: "50%", lineHeight: "1.6", marginTop: "20px" }}
          className="mb-8"
        >
          Big Kens Enterprises is where real estate, automobiles,
          mobile technology, and music come together. We provide
          solutions that keep you moving, connected, and inspired.
        </motion.p>

        <motion.button
          variants={item}
          className="btn bg-[#b5ffcb] text-black px-8 py-4 rounded-md font-bold hover:bg-[#9ae6af] transition-all transform hover:scale-105"
          style={{ marginTop: "25px" }}
        >
          Explore Our Services
        </motion.button>
      </motion.div>
    </section>
  );
}
