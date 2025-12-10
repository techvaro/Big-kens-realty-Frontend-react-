import { motion } from "framer-motion";
import { FadeInSection, SlideIn, StaggerContainer } from "../animations";
import realEstateImg from '../../assets/image/house.png';
import autoMobileImg from '../../assets/image/car.png';
import musicImg from '../../assets/image/lap.png';

export default function Services() {
  const services = [
    {
      title: "Real Estate",
      description: "Find your dream home with our real estate listings.",
      image: realEstateImg,
      link: "/real-estate"
    },
    {
      title: "Auto Mobiles",
      description: "Find your dream vehicle with our listings.",
      image: autoMobileImg,
      link: "/auto-mobile"
    },
    {
      title: "Music Production",
      description: "Create amazing music with our production services.",
      image: musicImg,
      link: "/music"
    }
  ];

  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Discover our diverse range of services tailored to meet your needs
        </p>
      </FadeInSection>

      <StaggerContainer staggerDelay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
                className="bg-[#1b1e49] p-6 rounded-xl text-white transition-all duration-300"
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-300">
                  {service.description}
                </p>
                <motion.a
                  href={service.link}
                  className="text-[#b5ffcb] font-bold mt-4 inline-block hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.a>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}
