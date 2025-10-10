import React, { useState, useEffect } from "react";
import Logo from '../assets/logo.jpg'
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHandHoldingHeart } from "react-icons/fa";

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
                ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
                : "bg-white"
            }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <div className="relative overflow-hidden rounded-full">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="absolute inset-0 bg-gradient-to-r from-royal-400/30 to-blue-400/30 rounded-full"
                            />
                            <motion.img 
                                whileHover={{ rotate: 10, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-12 h-12 rounded-full shadow-md relative z-10" 
                                src={Logo} 
                                alt="logo" 
                            />
                        </div>
                        <div className="ml-3">
                            <span className="block text-xl font-bold text-royal-500 group-hover:text-royal-400 transition-colors duration-300">
                                Jayashree Foundation
                            </span>
                            <span className="text-xs text-gray-500">Empowering Communities</span>
                        </div>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                to={link.path} 
                                className="group relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                            >
                                <span className={`relative z-10 ${
                                    isActive(link.path) 
                                    ? "text-royal-500" 
                                    : "text-gray-600 group-hover:text-royal-400"
                                }`}>
                                    {link.name}
                                </span>
                                
                                {/* Hover effect */}
                                <span className="absolute inset-0 bg-royal-50 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom"></span>
                                
                                {/* Active indicator */}
                                {isActive(link.path) && (
                                    <motion.span 
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-royal-500 to-blue-500 rounded-full"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}
                        
                        {/* Donate Button */}
                        <Link 
                            to="/Donate" 
                            className="group relative ml-2 overflow-hidden bg-gradient-to-r from-royal-500 to-blue-500 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FaHandHoldingHeart className="text-sm" />
                                <span>Donate</span>
                            </span>
                            
                            {/* Animated background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-royal-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="relative w-10 h-10 flex justify-center items-center rounded-full bg-royal-50 text-royal-500 hover:bg-royal-100 focus:outline-none transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-5 flex flex-col justify-center items-center">
                                <span className={`bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''} w-5 h-0.5 rounded-full`}></span>
                                <span className={`bg-current transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'} w-5 h-0.5 rounded-full my-1`}></span>
                                <span className={`bg-current transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''} w-5 h-0.5 rounded-full`}></span>
                            </div>
                        </button>
                    </div>
                </div>
                
                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                        >
                            <div className="p-4 space-y-1">
                                {navLinks.map((link) => (
                                    <Link 
                                        key={link.path}
                                        to={link.path} 
                                        className={`flex items-center py-3 px-4 rounded-lg ${
                                            isActive(link.path) 
                                            ? "bg-royal-50 text-royal-500 font-medium" 
                                            : "text-gray-600 hover:bg-gray-50 hover:text-royal-400"
                                        } transition-all duration-200`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span>{link.name}</span>
                                        {isActive(link.path) && (
                                            <motion.span 
                                                layoutId="mobile-indicator"
                                                className="ml-2 w-1.5 h-1.5 rounded-full bg-royal-500"
                                            />
                                        )}
                                    </Link>
                                ))}
                            </div>
                            
                            <div className="p-4 bg-gradient-to-r from-royal-50 to-blue-50">
                                <Link 
                                    to="/Donate" 
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-royal-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium shadow-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FaHandHoldingHeart />
                                    <span>Donate Now</span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
