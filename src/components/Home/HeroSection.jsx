import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Home from '../../Images/Home/HeroCarousel/Home.jpg';
import { FaHandHoldingHeart, FaArrowRight, FaHeart, FaUsers, FaHandsHelping } from "react-icons/fa";

const HeroSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, filter: "blur(5px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${Home})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Modern gradient overlay with mesh effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/90 via-royal-500/80 to-black/70"></div>
      
      {/* Mesh grid overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 30px 30px, white 2px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}>
      </div>
      
      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: "blur(1px)"
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              y: [0, -100, 0],
              x: [0, particle.id % 2 === 0 ? 50 : -50, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-royal-400/20 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center h-full text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 shadow-glow-light">
            <motion.span 
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"
            />
            Empowering Communities Since 2020
          </span>
        </motion.div>
        
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          <span className="block mb-2 text-blue-100">Welcome to</span>
          <span className="relative">
            {/* Text with gradient */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Jayashree Foundation
            </span>
            
            {/* Underline effect */}
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
            />
          </span>
        </motion.h1>
        
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mt-8 text-xl md:text-2xl max-w-2xl text-blue-50/90 leading-relaxed"
        >
          A public charitable trust working for the benefit of all persons regardless of gender, caste, creed, or religion.
        </motion.p>
        
        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-3 gap-4 max-w-2xl w-full"
        >
          {[
            { icon: FaHeart, count: "50+", label: "Projects" },
            { icon: FaUsers, count: "1000+", label: "Lives Impacted" },
            { icon: FaHandsHelping, count: "30+", label: "Volunteers" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <stat.icon className="text-blue-300 text-xl mb-1" />
              <span className="text-2xl font-bold">{stat.count}</span>
              <span className="text-xs text-blue-100/80">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <motion.div variants={fadeInUp}>
            <Link
              to="/Donate"
              className="group relative overflow-hidden flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-500 to-blue-500 rounded-full font-semibold text-white shadow-glow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <FaHandHoldingHeart className="text-xl" />
              <span>Donate Now</span>
              
              {/* Animated shine effect */}
              <motion.span 
                animate={{ 
                  x: ["0%", "200%"],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <Link
              to="/AboutUs"
              className="group flex items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-medium text-white hover:bg-white/20 transition-all duration-300"
            >
              <span>Learn More</span>
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Modern scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-blue-100/70 mb-2 tracking-wider">SCROLL</span>
            <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center items-start p-1.5">
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-blue-300 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
