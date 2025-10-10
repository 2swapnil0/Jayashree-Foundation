import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logos/3m.svg';
import logo2 from '../assets/logos/barstool-store.svg';
import logo3 from '../assets/logos/budweiser.svg';
import logo4 from '../assets/logos/buzzfeed.svg';
import logo5 from '../assets/logos/forbes.svg';
import logo6 from '../assets/logos/macys.svg';
import logo7 from '../assets/logos/menshealth.svg';
import logo8 from '../assets/logos/mrbeast.svg';

const Supporters = () => {
  const logos = [
    { src: logo1, alt: "3M" },
    { src: logo2, alt: "Barstool Store" },
    { src: logo3, alt: "Budweiser" },
    { src: logo4, alt: "Buzzfeed" },
    { src: logo5, alt: "Forbes" },
    { src: logo6, alt: "Macys" },
    { src: logo7, alt: "Mens Health" },
    { src: logo8, alt: "Mr Beast" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 w-64 h-64 bg-royal-50 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-royal-50 text-royal-500 border border-royal-100">
              Trusted By
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Supporters & Partners</h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-royal-500 to-blue-500 mx-2 rounded-full"></div>
            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We're proud to collaborate with these organizations who share our vision for a better world.
          </p>
        </motion.div>
        
        {/* Logos grid with hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex justify-center items-center group"
            >
              <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 w-full h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                />
                
                {/* Subtle corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-royal-200 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-royal-200 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">Interested in becoming a partner?</p>
          <a 
            href="/ContactUs" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-royal-500 rounded-full text-royal-500 font-medium hover:bg-royal-50 transition-colors duration-300"
          >
            <span>Contact Us</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Supporters;
