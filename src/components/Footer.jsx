
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo.jpg";

const Footer = () => {
    return (
        <footer className="bg-[#0C193C] text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link to="/" className="flex items-center">
                            <img src={logo} className="h-12 mr-3" alt="Jayashree Foundation Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">Jayashree Foundation</span>
                        </Link>
                        <p className="mt-4 text-gray-400">Join us in our mission to create a better world for everyone. Your support can make a difference.</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><Link to="/AboutUs" className="hover:underline">About Us</Link></li>
                            <li><Link to="/Gallery" className="hover:underline">Gallery</Link></li>
                            <li><Link to="/Blog" className="hover:underline">Blog</Link></li>
                            <li><Link to="/ContactUs" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/people/Jayashree-Foundation/100080648706671/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook size={24} /></a>
                            <a href="https://www.instagram.com/jayashree_foundation/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={24} /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaTwitter size={24} /></a>
                            <a href="https://youtube.com/@vedanttewari3944" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube size={24} /></a>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <div className="text-center text-gray-400">
                    © {new Date().getFullYear()} Jayashree Foundation. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;