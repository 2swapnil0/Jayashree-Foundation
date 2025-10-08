import React, { useState } from "react";
import Logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img className="w-12 h-12" src={Logo} alt="logo" />
                            <span className="ml-3 text-xl font-semibold text-[#0C193C]">Jayashree Foundation</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
                        <Link to="/AboutUs" className="text-gray-600 hover:text-blue-500">About Us</Link>
                        <Link to="/Gallery" className="text-gray-600 hover:text-blue-500">Gallery</Link>
                        <Link to="/Blog" className="text-gray-600 hover:text-blue-500">Blog</Link>
                        <Link to="/JoinUs" className="text-gray-600 hover:text-blue-500">Join Us</Link>
                        <Link to="/ContactUs" className="text-gray-600 hover:text-blue-500">Contact Us</Link>
                        <Link to="/Donate" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Donate</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-500 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <Link to="/" className="block py-2 text-gray-600 hover:text-blue-500">Home</Link>
                        <Link to="/AboutUs" className="block py-2 text-gray-600 hover:text-blue-500">About Us</Link>
                        <Link to="/Gallery" className="block py-2 text-gray-600 hover:text-blue-500">Gallery</Link>
                        <Link to="/Blog" className="block py-2 text-gray-600 hover:text-blue-500">Blog</Link>
                        <Link to="/JoinUs" className="block py-2 text-gray-600 hover:text-blue-500">Join Us</Link>
                        <Link to="/ContactUs" className="block py-2 text-gray-600 hover:text-blue-500">Contact Us</Link>
                        <Link to="/Donate" className="block mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Donate</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
