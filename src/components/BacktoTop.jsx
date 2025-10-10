import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={backToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-royal-500 to-blue-500 text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-royal-400 focus:ring-offset-2 transform hover:-translate-y-1 transition-all duration-300"
        >
          <span className="sr-only">Back to top</span>
          
          {/* Button content with animation */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Animated background pulse */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 bg-gradient-to-r from-royal-400 to-blue-400 rounded-full opacity-0 hover:opacity-30"
            />
            
            {/* Arrow icon with animation */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaArrowUp className="text-lg" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
