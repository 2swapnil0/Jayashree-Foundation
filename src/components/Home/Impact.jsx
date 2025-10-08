import React from 'react';
import { motion } from 'framer-motion';
import { SiWorldhealthorganization } from "react-icons/si";
import { PiBooksFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { BsLaptop } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import CountUp from 'react-countup';

const ImpactCard = ({ icon: Icon, count, suffix = "", text, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative bg-white p-8 rounded-2xl shadow-soft-xl text-center overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-royal-500/5 to-royal-500/10 rounded-full"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-tr from-royal-500/5 to-royal-500/10 rounded-full"></div>
      
      {/* Icon with animated background */}
      <div className="relative mb-6 inline-flex">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-500/20 to-blue-500/20 animate-pulse-slow"></div>
        <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-royal-500 to-blue-500 flex items-center justify-center shadow-md">
          <Icon className="text-2xl text-white" />
        </div>
      </div>
      
      {/* Counter */}
      <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-500 to-blue-500 mb-2 flex justify-center items-baseline">
        <CountUp 
          end={count} 
          duration={3} 
          enableScrollSpy 
          scrollSpyOnce
        />
        <span>{suffix}</span>
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 font-medium">{text}</p>
      
      {/* Animated border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </motion.div>
  );
};

const Impact = () => {
  const stats = [
    { icon: SiWorldhealthorganization, count: 60000, text: "Volunteer Hours", index: 0 },
    { icon: BsFillPeopleFill, count: 10000, text: "Beneficiaries", index: 1 },
    { icon: PiBooksFill, count: 8000, text: "Books Distributed", index: 2 },
    { icon: FaHandsAslInterpreting, count: 30, suffix: "+", text: "Events", index: 3 },
    { icon: BsLaptop, count: 50, text: "E-Classes", index: 4 },
    { icon: ImLocation2, count: 6, text: "States", index: 5 }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-accent/30 to-white"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-royal-500/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 15 + (Math.random() * 10),
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-royal-50 text-royal-500 rounded-full text-sm font-medium mb-4">Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal-500 mb-4">Our Impact</h2>
          <p className="max-w-2xl mx-auto text-gray-600">The numbers that showcase our commitment to creating positive change in communities across India.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <ImpactCard 
              key={stat.index}
              icon={stat.icon}
              count={stat.count}
              suffix={stat.suffix || ""}
              text={stat.text}
              index={stat.index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
