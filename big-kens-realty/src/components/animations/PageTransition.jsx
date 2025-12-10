import { motion } from "framer-motion";

const PageTransition = ({ children, direction = "left" }) => {
  const variants = {
    hidden: { 
      opacity: 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    enter: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.main 
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      className="page-transition"
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;