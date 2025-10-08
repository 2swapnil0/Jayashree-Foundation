import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Home from '../../Images/Home/HeroCarousel/Home.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${Home})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to Jayashree Foundation
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          A public charitable trust for the benefit of all persons regardless of gender, caste, creed, or religion.
        </motion.p>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <Link
            to="/Donate"
            className="px-8 py-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Donate Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;