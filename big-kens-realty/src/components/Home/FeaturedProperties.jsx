import { motion } from "framer-motion";
import { FadeInSection, SlideIn, StaggerContainer } from "../animations";
import p1 from "../../assets/image/house1.png";
import p2 from "../../assets/image/house2.png";
import p3 from "../../assets/image/house3.png";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: p1,
      title: "4 Bedroom Duplex, Jahi, Abuja",
      price: "₦1,500,000",
      location: "Jahi, Abuja"
    },
    {
      id: 2,
      image: p2,
      title: "4 Bedroom Duplex, Jahi, Abuja",
      price: "₦1,500,000",
      location: "Jahi, Abuja"
    },
    {
      id: 3,
      image: p3,
      title: "4 Bedroom Duplex, Jahi, Abuja",
      price: "₦1,500,000",
      location: "Jahi, Abuja"
    }
  ];

  return (
    <section className="py-16 px-5 md:px-20 text-white bg-gradient-to-b from-gray-900 to-gray-800">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center text-[#76ffa8] mb-4">
          Featured Properties
        </h2>
        <p className="text-center text-gray-300 mt-3 max-w-2xl mx-auto mb-12">
          Discover top listings handpicked for quality, value, and prime locations—
          your ideal home or investment awaits.
        </p>
      </FadeInSection>

      <StaggerContainer staggerDelay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {properties.map((property, index) => (
            <SlideIn key={property.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                className="bg-[#1b1e49] p-5 rounded-xl shadow-xl transition-all duration-300 border border-gray-700"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </motion.div>

                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[#76ffa8] font-bold">{property.price}</p>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">{property.location}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-gradient-to-r from-[#0c0e28] to-[#1b1e49] px-4 py-3 rounded-lg text-white border border-[#76ffa8] hover:bg-[#76ffa8] hover:text-black transition-all duration-300"
                  >
                    View Property
                  </motion.button>
                </div>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
