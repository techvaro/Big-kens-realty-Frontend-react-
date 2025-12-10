import { motion } from "framer-motion";
import { FadeInSection, SlideIn } from "../animations";
import heroImage from "../../assets/image_about/house.png";

// Mission & Values Section
export default function MissionValues() {
  const values = [
    {
      id: 1,
      icon: "🛡",
      title: "Integrity",
      description: "We uphold honesty and transparency in every action."
    },
    {
      id: 2,
      icon: "⚙",
      title: "Excellence",
      description: "We provide high-quality service driven by passion."
    },
    {
      id: 3,
      icon: "🎯",
      title: "Client Focused",
      description: "We tailor solutions to meet each client's needs."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 to-[#0F1831] text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="mb-8 text-gray-300 max-w-lg">
              At Big Ken Enterprises, our mission and values guide everything we do. We are committed to innovation, reliability,
              and customer satisfaction.
            </p>
          </FadeInSection>

          <div className="space-y-6">
            {values.map((value, index) => (
              <SlideIn key={value.id} direction="left" delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all duration-300"
                >
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-300 max-w-md">{value.description}</p>
                  </div>
                </motion.div>
              </SlideIn>
            ))}
          </div>
        </div>

        <SlideIn direction="right">
          <motion.div
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src={heroImage} alt="House" className="w-full h-full object-cover rounded-xl" />
          </motion.div>
        </SlideIn>
      </div>
    </section>
  );
}