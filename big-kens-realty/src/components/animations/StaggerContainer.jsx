import { motion } from "framer-motion";

const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: staggerDelay }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;