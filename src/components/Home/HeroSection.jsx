import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Home from '../../Images/Home/HeroCarousel/Home.jpg';
import { FaHandHoldingHeart, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${Home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-royal-500/80 to-black/50"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.3 + (Math.random() * 0.2),
              scale: 1,
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10 + (Math.random() * 10),
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            Empowering Communities Since 2020
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          <span className="block">Welcome to</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Jayashree Foundation
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl max-w-2xl text-blue-50"
        >
          A public charitable trust working for the benefit of all persons regardless of gender, caste, creed, or religion.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/Donate"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-500 to-blue-500 rounded-full font-semibold text-white shadow-glow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaHandHoldingHeart className="text-xl" />
            <span>Donate Now</span>
          </Link>
          
          <Link
            to="/AboutUs"
            className="group flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium text-white hover:bg-white/20 transition-all duration-300"
          >
            <span>Learn More</span>
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div 
              animate={{ height: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-white/60 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
