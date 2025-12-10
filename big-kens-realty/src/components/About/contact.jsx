import { motion } from "framer-motion";
import { FadeInSection, SlideIn } from "../animations";
import contact from "../../assets/image_about/contact.png";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-[#0A1023] text-white px-6 md:px-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#76ffa8] rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-40 w-72 h-72 bg-[#b5ffcb] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Whether you have a question, suggestion, or need support, feel free to contact us. Our team is always ready to assist you.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <SlideIn direction="left">
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <img
                src={contact}
                alt="Contact Phone"
                className="rounded-xl shadow-2xl w-full max-w-sm border-2 border-[#76ffa8] border-opacity-30"
              />
            </motion.div>
          </SlideIn>

          {/* Right Form */}
          <SlideIn direction="right">
            <motion.form
              whileHover={{ y: -5 }}
              className="space-y-4 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-3 bg-[#b5ffcb] text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-3 bg-[#b5ffcb] text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="p-3 bg-[#b5ffcb] text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-[#b5ffcb] text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  placeholder="Category"
                  className="p-3 bg-[#b5ffcb] text-black rounded w-full focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="p-3 bg-[#b5ffcb] text-black rounded w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#76ffa8] transition-all"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#76ffa8" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#0F1831] to-gray-900 text-[#b5ffcb] font-bold px-6 py-4 rounded w-full transition-all duration-300 border border-[#b5ffcb]"
              >
                Send Message
              </motion.button>
            </motion.form>
          </SlideIn>
        </div>
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
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
