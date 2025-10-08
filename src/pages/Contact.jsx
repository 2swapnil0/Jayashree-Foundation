import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Our Location",
      details: "Room No -17, Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706"
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: "Phone Number",
      details: "+91 9876543210"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Email Address",
      details: "info@jayashreefoundation.org"
    },
    {
      icon: <FaClock className="text-xl" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-royal-500 to-royal-600 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ 
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
              }}
              transition={{
                duration: 15 + (Math.random() * 10),
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft-xl"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-royal-500 to-blue-500 flex items-center justify-center text-white mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-royal-500 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-soft-xl">
                <h2 className="text-3xl font-bold text-royal-500 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                
                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all duration-300" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all duration-300" 
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent transition-all duration-300" 
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-royal-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-medium"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full">
                <h2 className="text-3xl font-bold text-royal-500 mb-6">Our Location</h2>
                <p className="text-gray-600 mb-8">
                  Visit us at our office in Navi Mumbai. We're always happy to meet in person and discuss how we can work together.
                </p>
                <div className="relative h-[400px] rounded-2xl shadow-soft-xl overflow-hidden">
                  <iframe
                    title="map"
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Jayashree Foundation | Navi Mumbai, Room No -17,Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    className="absolute left-0 top-0 h-full w-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-royal-500 to-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Join us in our mission to create positive change in communities across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/Donate" className="px-8 py-3 bg-white text-royal-500 rounded-full font-semibold hover:shadow-glow-light transition-all duration-300">
                Donate Now
              </a>
              <a href="/JoinUs" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Volunteer With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
