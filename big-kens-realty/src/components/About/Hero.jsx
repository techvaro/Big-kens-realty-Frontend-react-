import { motion } from "framer-motion";
import { FadeInSection } from "../animations";
import heroImage from "../../assets/image_about/hero.png";

export default function Hero() {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } }
    };

    return (
        <section
            className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${heroImage})` }}
        >

            {/* Content aligned with navbar */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-20 text-center"
            >
                <motion.h1
                    variants={item}
                    className="text-6xl font-bold mb-6"
                >
                    About Us
                </motion.h1>
                <motion.p
                    variants={item}
                    className="text-xl max-w-3xl mx-auto leading-relaxed"
                >
                    Discover top listings handpicked for quality, value, and prime
                    locations—your ideal home or investment awaits.
                </motion.p>
            </motion.div>
        </section>
    );

}