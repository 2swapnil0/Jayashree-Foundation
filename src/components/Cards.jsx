import React from 'react';
import { FaBullseye, FaProjectDiagram, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CardItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative bg-white rounded-2xl overflow-hidden group"
    >
      {/* Card inner with glass effect */}
      <div className="relative z-10 p-8 backdrop-blur-sm border border-gray-100 h-full rounded-2xl transition-all duration-300 shadow-lg group-hover:shadow-xl">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-50/50 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-royal-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-150"></div>
        <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-gradient-to-tr from-royal-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-150"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          {/* Icon container with animated background */}
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-royal-400/20 to-blue-400/20 rounded-2xl transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-royal-500 to-blue-500 flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-all duration-500">
              <Icon className="text-2xl text-white" />
            </div>
            
            {/* Animated dots */}
            <motion.div 
              className="absolute w-2 h-2 bg-royal-300 rounded-full"
              style={{ top: '-5px', right: '-5px' }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: delay * 2
              }}
            />
            <motion.div 
              className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full"
              style={{ bottom: '-3px', left: '-3px' }}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: delay * 2 + 0.5
              }}
            />
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 text-royal-500 group-hover:text-royal-600 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
          
          {/* Learn more link */}
          <div className="mt-6 overflow-hidden">
            <div className="flex items-center text-royal-400 font-medium transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-royal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  );
};

const Cards = () => {
  const cards = [
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "Our Goal, Vision & Commitment to create lasting positive change in communities.",
      delay: 0.1
    },
    {
      icon: FaProjectDiagram,
      title: "Our Projects",
      description: "Register & Help Make Change through our innovative community-focused initiatives.",
      delay: 0.2
    },
    {
      icon: FaUsers,
      title: "Get Involved",
      description: "Volunteer, Participate, or Donate to support our mission and make a difference.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-royal-50 text-royal-500 border border-royal-100">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-royal-500 mb-4">How We Make a Difference</h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-royal-500 to-blue-500 mx-2 rounded-full"></div>
            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            We're committed to creating sustainable change through these key areas of focus.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <CardItem 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
