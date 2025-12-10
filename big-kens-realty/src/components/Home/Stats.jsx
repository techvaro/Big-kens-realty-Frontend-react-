import { motion } from "framer-motion";
import { FadeInSection, StaggerContainer } from "../animations";
import bg1 from '../../assets/image/bg1.png';

export default function Stats() {
  const stats = [
    { value: "63+", label: "Happy Customers" },
    { value: "42+", label: "Properties Sold" },
    { value: "63+", label: "Successful Transactions" },
    { value: "5+", label: "Years Experience" }
  ];

  return (
    <section
      className="bg-cover bg-center py-20 px-5 md:px-10 text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${bg1})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      <div className="relative z-10">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8]">
            Our Achievements
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Trusted by many and growing every day
          </p>
        </FadeInSection>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
              >
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: index * 0.1 + 0.3
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="mb-4"
                >
                  <motion.h2
                    className="text-5xl font-bold text-[#76ffa8]"
                  >
                    {stat.value}
                  </motion.h2>
                </motion.div>
                <motion.p
                  className="text-lg text-gray-200 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
