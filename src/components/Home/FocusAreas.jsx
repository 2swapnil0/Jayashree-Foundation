import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaLeaf } from "react-icons/fa";
import Education from '../../Images/Home/FocusedAreas/Education.jpg';
import Health from '../../Images/Home/FocusedAreas/Health.jpg';
import Empowerment from '../../Images/Home/FocusedAreas/Empowerment.jpg';

const FocusCard = ({ image, icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group relative bg-white rounded-2xl shadow-soft-xl overflow-hidden"
    >
      {/* Card top with image and overlay */}
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating icon */}
        <div className="absolute -bottom-10 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bottom-6 transition-all duration-300">
          <Icon className="text-2xl text-royal-500" />
        </div>
      </div>
      
      {/* Card content */}
      <div className="p-6 pt-8">
        <h3 className="text-2xl font-bold text-royal-500 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link 
          to="/blog" 
          className="inline-flex items-center text-royal-500 font-medium group/link"
        >
          <span className="relative">
            Read More
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-500 group-hover/link:w-full transition-all duration-300"></span>
          </span>
          <svg 
            className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const FocusAreas = () => {
  const areas = [
    {
      image: Education,
      icon: FaGraduationCap,
      title: "Education",
      description: "Holistic education and quality skill development of rural masses & women."
    },
    {
      image: Health,
      icon: FaHeartbeat,
      title: "Health",
      description: "Awareness & Guidance on Menstrual Health and Puberty amongst the masses."
    },
    {
      image: Empowerment,
      icon: FaLeaf,
      title: "Environment",
      description: "Mentoring, Guiding and creating the entrepreneurial and self-reliance mindset."
    }
  ];

  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-royal-50 text-royal-500 rounded-full text-sm font-medium mb-4">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-royal-500 mb-4">Our Focus Areas</h2>
          <p className="max-w-2xl mx-auto text-gray-600">We concentrate our efforts in these key areas to create meaningful and sustainable impact in communities.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {areas.map((area, index) => (
            <FocusCard 
              key={index}
              image={area.image}
              icon={area.icon}
              title={area.title}
              description={area.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
