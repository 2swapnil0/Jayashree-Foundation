import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.jpg'
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/AboutUs" },
        { name: "Members", path: "/AboutUs#members" },
        { name: "Gallery", path: "/Gallery" },
        { name: "Blog", path: "/Blog" },
        { name: "Join Us", path: "/JoinUs" },
        { name: "Contact Us", path: "/ContactUs" },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                ? "bg-white/90 backdrop-blur-md shadow-lg" 
                : "bg-white"
            }`}
        >
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center group">
                        <motion.img 
                            whileHover={{ rotate: 10 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 rounded-full shadow-md" 
                            src={Logo} 
                            alt="logo" 
                        />
                        <span className="ml-3 text-xl font-bold text-royal-500 group-hover:text-royal-400 transition-colors duration-300">
                            Jayashree Foundation
                        </span>
                    </Link>
                    
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                    isActive(link.path) 
                                    ? "text-royal-500" 
                                    : "text-gray-600 hover:text-royal-400"
                                }`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.span 
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-500 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                        <Link 
                            to="/Donate" 
                            className="ml-2 bg-gradient-to-r from-royal-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Donate
                        </Link>
                    </div>
                    
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="text-royal-500 hover:text-royal-400 focus:outline-none transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg p-4"
                    >
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                className={`block py-2 px-3 rounded-md ${
                                    isActive(link.path) 
                                    ? "bg-accent text-royal-500 font-medium" 
                                    : "text-gray-600 hover:bg-gray-50 hover:text-royal-400"
                                } transition-colors duration-200`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link 
                            to="/Donate" 
                            className="block mt-3 bg-gradient-to-r from-royal-500 to-blue-500 text-white px-4 py-2 rounded-md font-medium text-center shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Donate
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}

export default Navbar;
