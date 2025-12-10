import { motion } from "framer-motion";
import { FadeInSection, SlideIn, StaggerContainer } from "../animations";
import car1 from "../../assets/car/car1.png";
import car2 from "../../assets/car/car2.png";
import car3 from "../../assets/car/car3.png";

export default function Cars() {
  const cars = [
    {
      id: 1,
      name: "2022 Toyota Camry",
      price: "₦ 2.3M",
      img: car1,
      location: "Lagos",
      mileage: "15,000 km",
      year: "2022",
      type: "Sedan"
    },
    {
      id: 2,
      name: "2021 Honda Accord",
      price: "₦ 4.8M",
      img: car2,
      location: "Abuja",
      mileage: "20,000 km",
      year: "2021",
      type: "Sedan"
    },
    {
      id: 3,
      name: "2023 Tesla Model 3",
      price: "₦ 2.3M",
      img: car3,
      location: "Port Harcourt",
      mileage: "5,000 km",
      year: "2023",
      type: "Electric"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-[#0A1023] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#76ffa8] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#b5ffcb] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Cars</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore our carefully curated selection of premium vehicles</p>
          </div>
        </FadeInSection>

        <StaggerContainer staggerDelay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 px-6 md:px-12">
            {cars.map((car, index) => (
              <SlideIn key={car.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    y: -15,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700 flex flex-col transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <motion.img
                      src={car.img}
                      className="w-full h-48 object-contain transition-transform duration-500"
                      alt={car.name}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {car.year}
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-xl mb-2">{car.name}</h3>

                  <div className="flex justify-between text-sm text-gray-400 mb-3">
                    <span>📍 {car.location}</span>
                    <span>{car.mileage}</span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-[#b5ffcb]">{car.price}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">{car.type}</span>
                  </div>

                  <div className="mt-auto pt-4">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-gradient-to-r from-[#b5ffcb] to-[#76ffa8] text-[#0A1023] px-6 py-3 rounded-lg w-full font-semibold hover:from-[#a0e0b0] hover:to-[#60e090] transition-all duration-300"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </StaggerContainer>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
