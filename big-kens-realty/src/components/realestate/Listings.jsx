import { motion } from "framer-motion";
import { FadeInSection, SlideIn, StaggerContainer } from "../animations";
import house from "../../assets/estate/house.png";

export default function FeaturedListings() {
  const properties = [
    {
      id: 1,
      title: "Modern Family Home",
      price: "₦ 2.3M",
      image: house,
      location: "Jahi, Abuja",
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 2,
      title: "Luxury Villa",
      price: "₦ 5.8M",
      image: house,
      location: "Garki, Abuja",
      bedrooms: 6,
      bathrooms: 5
    },
    {
      id: 3,
      title: "Cozy Apartment",
      price: "₦ 1.2M",
      image: house,
      location: "Wuse, Abuja",
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 4,
      title: "Urban Studio",
      price: "₦ 950K",
      image: house,
      location: "Maitama, Abuja",
      bedrooms: 1,
      bathrooms: 1
    },
    {
      id: 5,
      title: "Elegant Duplex",
      price: "₦ 3.7M",
      image: house,
      location: "Asokoro, Abuja",
      bedrooms: 4,
      bathrooms: 4
    },
    {
      id: 6,
      title: "Spacious Bungalow",
      price: "₦ 2.9M",
      image: house,
      location: "Kubwa, Abuja",
      bedrooms: 5,
      bathrooms: 3
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F1831] to-gray-900 text-white px-6 md:px-20">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-4">Featured Listings</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Explore our handpicked selection of the finest properties available.
        </p>
      </FadeInSection>

      <StaggerContainer staggerDelay={0.1}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((item, index) => (
            <SlideIn key={item.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <motion.div
                whileHover={{
                  y: -15,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                className="bg-gradient-to-br from-[#b5ffcb] to-[#76ffa8] text-black rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {item.bedrooms} Bed
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <span className="font-bold text-lg bg-black text-white px-3 py-1 rounded">{item.price}</span>
                  </div>

                  <div className="flex items-center text-sm mb-3">
                    <span className="mr-4">📍 {item.location}</span>
                    <span> baths: {item.bathrooms}</span>
                  </div>

                  <p className="text-gray-800 mb-4">
                    A stylish, comfortable space with open layouts, natural light,
                    and modern features for everyday living.
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="font-bold text-[#0F1831] hover:text-black transition-colors"
                    >
                      View Details →
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Contact
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
