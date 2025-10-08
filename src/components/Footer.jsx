
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="relative bg-royal-500 text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-400/10 rounded-full blur-xl"></div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-400/10 rounded-full blur-xl"></div>
            </div>
            
            {/* Wave separator */}
            <div className="absolute top-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            
            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* About */}
                    <div>
                        <Link to="/" className="flex items-center group">
                            <motion.img 
                                whileHover={{ rotate: 10 }}
                                transition={{ duration: 0.3 }}
                                src={logo} 
                                className="h-14 w-14 rounded-full border-2 border-white/20 p-1 mr-3" 
                                alt="Jayashree Foundation Logo" 
                            />
                            <span className="self-center text-xl font-bold whitespace-nowrap group-hover:text-blue-200 transition-colors duration-300">
                                Jayashree Foundation
                            </span>
                        </Link>
                        <p className="mt-4 text-blue-100/80 leading-relaxed">
                            Join us in our mission to create a better world for everyone. Your support can make a difference in the lives of many.
                        </p>
                        <Link 
                            to="/Donate" 
                            className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            <FaHeart className="text-pink-300" />
                            <span>Donate Now</span>
                        </Link>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-blue-300 mr-3"></span>
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
                                        className="group flex items-center text-blue-100/80 hover:text-white transition-colors duration-300"
                                    >
                                        <span className="w-0 h-0.5 bg-blue-300 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-blue-300 mr-3"></span>
                            Contact Us
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-blue-300 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-blue-100/80">
                                    Room No -17, Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706
                                </span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-blue-300 mr-3 flex-shrink-0" />
                                <span className="text-blue-100/80">+91 9876543210</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-blue-300 mr-3 flex-shrink-0" />
                                <span className="text-blue-100/80">info@jayashreefoundation.org</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Social Media */}
                    <div>
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="w-8 h-0.5 bg-blue-300 mr-3"></span>
                            Follow Us
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href="https://www.facebook.com/people/Jayashree-Foundation/100080648706671/?mibextid=LQQJ4d" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                            <a 
                                href="https://www.instagram.com/jayashree_foundation/?igshid=MzRlODBiNWFlZA%3D%3D" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a 
                                href="https://youtube.com/@vedanttewari3944" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                        
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
                            <div className="flex">
                                <input 
                                    type="email" 
                                    placeholder="Your email" 
                                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-300 w-full text-sm"
                                />
                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-md transition-colors duration-300 text-sm font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className="my-10 border-blue-400/20" />
                
                <div className="flex flex-col md:flex-row justify-between items-center text-blue-100/70 text-sm">
                    <div>
                        © {currentYear} Jayashree Foundation. All Rights Reserved.
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
