import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="relative bg-royal-500 text-white overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Glowing orbs */}
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" 
                    style={{ 
                        backgroundImage: `radial-gradient(circle at 20px 20px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}>
                </div>
            </div>
            
            {/* Modern wave separator */}
            <div className="absolute top-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="fill-white">
                    <path d="M0,64L40,58.7C80,53,160,43,240,42.7C320,43,400,53,480,64C560,75,640,85,720,80C800,75,880,53,960,48C1040,43,1120,53,1200,58.7C1280,64,1360,64,1400,64L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>
            </div>
            
            <div className="container mx-auto px-6 pt-36 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div>
                        <Link to="/" className="flex items-center group">
                            <div className="relative overflow-hidden rounded-full">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-royal-400/30 rounded-full"
                                />
                                <motion.img 
                                    whileHover={{ rotate: 10, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={logo} 
                                    className="h-14 w-14 rounded-full border-2 border-white/20 p-1 relative z-10" 
                                    alt="Jayashree Foundation Logo" 
                                />
                            </div>
                            <div className="ml-3">
                                <span className="block text-xl font-bold whitespace-nowrap group-hover:text-blue-200 transition-colors duration-300">
                                    Jayashree Foundation
                                </span>
                                <span className="text-xs text-blue-200/70">Empowering Communities</span>
                            </div>
                        </Link>
                        
                        <p className="mt-4 text-blue-100/80 leading-relaxed">
                            Join us in our mission to create a better world for everyone. Your support can make a difference in the lives of many.
                        </p>
                        
                        <Link 
                            to="/Donate" 
                            className="group relative overflow-hidden mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            <FaHandHoldingHeart className="text-blue-300" />
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
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mr-3 rounded-full"></span>
                            Quick Links
                        </h2>
                        <ul className="space-y-3">
                            {[
                                { to: "/", text: "Home" },
                                { to: "/AboutUs", text: "About Us" },
                                { to: "/Gallery", text: "Gallery" },
                                { to: "/Blog", text: "Blog" },
                                { to: "/JoinUs", text: "Join Us" },
                                { to: "/ContactUs", text: "Contact Us" }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.to} 
                                        className="group flex items-center text-blue-100/80 hover:text-white transition-all duration-300"
                                    >
                                        <span className="flex items-center justify-center w-0 h-6 bg-blue-500/10 rounded-full mr-0 group-hover:w-6 group-hover:mr-2 transition-all duration-300 overflow-hidden">
                                            <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mr-3 rounded-full"></span>
                            Contact Us
                        </h2>
                        <ul className="space-y-5">
                            <li className="flex items-start group">
                                <div className="mt-1 mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-blue-300" />
                                </div>
                                <span className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">
                                    Room No -17, Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <FaPhone className="text-blue-300" />
                                </div>
                                <span className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">+91 9876543210</span>
                            </li>
                            <li className="flex items-center group">
                                <div className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <FaEnvelope className="text-blue-300" />
                                </div>
                                <span className="text-blue-100/80 group-hover:text-blue-100 transition-colors duration-300">info@jayashreefoundation.org</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Social Media & Newsletter */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mr-3 rounded-full"></span>
                            Connect With Us
                        </h2>
                        
                        {/* Social Media Icons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            {[
                                { icon: FaFacebook, href: "https://www.facebook.com/people/Jayashree-Foundation/100080648706671/?mibextid=LQQJ4d", hoverClass: "hover:bg-blue-600", label: "Facebook" },
                                { icon: FaInstagram, href: "https://www.instagram.com/jayashree_foundation/?igshid=MzRlODBiNWFlZA%3D%3D", hoverClass: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500", label: "Instagram" },
                                { icon: FaTwitter, href: "#", hoverClass: "hover:bg-blue-400", label: "Twitter" },
                                { icon: FaYoutube, href: "https://youtube.com/@vedanttewari3944", hoverClass: "hover:bg-red-600", label: "YouTube" }
                            ].map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.hoverClass} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-light`}
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                        
                        {/* Newsletter Subscription */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                            <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
                            <p className="text-sm text-blue-100/70 mb-4">Stay updated with our latest news and events.</p>
                            <div className="flex flex-col space-y-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="px-4 py-3 bg-white/10 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full text-sm"
                                />
                                <button className="px-4 py-3 bg-gradient-to-r from-royal-400 to-blue-500 hover:from-royal-500 hover:to-blue-600 rounded-md transition-all duration-300 text-sm font-medium transform hover:-translate-y-0.5">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Divider with enhanced styling */}
                <div className="my-10 flex items-center">
                    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
                    <div className="mx-4 w-2 h-2 rounded-full bg-blue-400/30"></div>
                    <div className="flex-grow h-px bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20"></div>
                </div>
                
                {/* Copyright and links */}
                <div className="flex flex-col md:flex-row justify-between items-center text-blue-100/70 text-sm">
                    <div className="flex items-center">
                        <FaHeart className="text-blue-400 mr-2 animate-pulse" />
                        <span>© {currentYear} Jayashree Foundation. All Rights Reserved.</span>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300 hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
