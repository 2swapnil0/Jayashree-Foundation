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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative bg-white p-8 rounded-xl shadow-soft-xl overflow-hidden group"
    >
      {/* Background pattern */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-royal-50 to-accent opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-500"></div>
      
      {/* Icon container */}
      <div className="relative z-10 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-royal-500 to-blue-500 flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-transform duration-300">
          <Icon className="text-2xl text-white" />
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-royal-500 group-hover:text-royal-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-royal-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-royal-500 mb-4">How We Make a Difference</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-royal-500 to-blue-500 mx-auto"></div>
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
