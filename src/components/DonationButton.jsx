import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";

const DonationButton = () => {
    return (
        <div className="bg-gradient-to-b from-white to-accent/10 overflow-hidden py-16 sm:py-24 relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-20 top-20 w-64 h-64 bg-royal-50 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -left-20 bottom-20 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>
            </div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5" 
                style={{ 
                    backgroundImage: `radial-gradient(circle at 20px 20px, #0C193C 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}>
            </div>
            
            <div className="container mx-auto px-6">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block mb-4">
                            <span className="px-4 py-1 rounded-full text-sm font-medium bg-royal-50 text-royal-500 border border-royal-100">
                                Make an Impact
                            </span>
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                            Donate & <span className="text-royal-500">Join Us</span>
                        </h2>
                        
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
                            <div className="w-24 h-1 bg-gradient-to-r from-royal-500 to-blue-500 mx-2 rounded-full"></div>
                            <div className="w-12 h-1 bg-royal-200 rounded-full"></div>
                        </div>
                        
                        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
                            Your donation, no matter how small, can create a significant difference in someone's life. 
                            Join our mission to empower communities and create lasting change.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <Link 
                            to="/Donate" 
                            className="group relative overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-royal-500 to-blue-500 rounded-xl font-semibold text-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
                        
                        <Link 
                            to="/JoinUs" 
                            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-royal-500 rounded-xl font-semibold text-royal-500 hover:bg-royal-50 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaUsers className="text-xl transition-transform duration-300 group-hover:scale-110" />
                            <span>Join Us</span>
                        </Link>
                    </motion.div>
                    
                    {/* Impact stats */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { number: "100%", text: "of your donation goes directly to our programs" },
                            { number: "1000+", text: "lives positively impacted through our initiatives" },
                            { number: "30+", text: "active volunteers working to make a difference" }
                        ].map((stat, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-3xl font-bold text-royal-500 mb-2">{stat.number}</div>
                                <p className="text-gray-600">{stat.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default DonationButton;
