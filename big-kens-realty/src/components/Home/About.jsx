import { motion } from "framer-motion";
import { FadeInSection, SlideIn } from "../animations";
import about1 from '../../assets/image/about1.png';
import about2 from '../../assets/image/about2.png';
import about3 from '../../assets/image/about3.png';

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-5 md:px-10 lg:px-20 py-20">
      <FadeInSection>
        <h2 className="text-4xl font-bold text-center text-[#b5ffcb] mb-4">
          About Us
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Innovation and passion delivering solutions that transform everyday living into extraordinary experiences
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* LEFT — Two Stacked Images */}
        <div className="flex flex-col gap-10">
          <SlideIn direction="left">
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={about1}
                alt="Sound Studio"
                className="rounded-lg object-cover h-[200px] w-full transition-transform duration-300"
              />
            </motion.div>
          </SlideIn>

          <SlideIn direction="left" delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={about2}
                alt="Car"
                className="rounded-lg object-cover h-[200px] w-full transition-transform duration-300"
              />
            </motion.div>
          </SlideIn>
        </div>

        {/* MIDDLE — Tall Image */}
        <div className="flex justify-center items-center">
          <SlideIn direction="up" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03, rotateX: 5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={about3}
                alt="Resort"
                className="rounded-lg object-cover h-full w-full max-h-[440px] transition-transform duration-300"
              />
            </motion.div>
          </SlideIn>
        </div>

        {/* RIGHT — Text Section */}
        <SlideIn direction="right" delay={0.1}>
          <div className="flex flex-col justify-start">
            <p className="leading-relaxed mb-6 text-[16px] text-gray-300">
              At Big Kens Enterprises, we are driven by innovation and powered
              by passion delivering solutions that transform everyday living
              into extraordinary experiences.
            </p>

            <p className="leading-relaxed text-[16px] text-gray-300">
              With years of experience across multiple industries, we've built a reputation
              for excellence, reliability, and customer satisfaction. Our mission is to
              provide innovative solutions that exceed expectations.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 p-6 border-l-4 border-[#76ffa8] bg-gray-800 bg-opacity-50 italic text-gray-300 rounded-r-lg"
            >
              "We believe in turning visions into reality, one exceptional service at a time."
            </motion.blockquote>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
