import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaRegCreditCard, FaRegMoneyBillAlt, FaCheckCircle } from 'react-icons/fa';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleDonorInfoChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    
    // In a real application, you would process the payment here
    console.log({
      amount: donationAmount === 'custom' ? customAmount : donationAmount,
      donorInfo,
      paymentMethod
    });
  };

  const donationOptions = [
    { amount: '500', label: '₹500' },
    { amount: '1000', label: '₹1,000' },
    { amount: '2500', label: '₹2,500' },
    { amount: '5000', label: '₹5,000' },
    { amount: '10000', label: '₹10,000' },
    { amount: 'custom', label: 'Custom' }
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Make a Donation</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your contribution helps us create positive change in communities across India.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Donation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-soft-xl text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-4xl text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-royal-500 mb-4">Thank You for Your Donation!</h2>
              <p className="text-gray-600 mb-6">
                Your generosity makes a real difference. We've sent a confirmation email with details of your donation.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="px-6 py-3 bg-royal-500 text-white rounded-lg hover:bg-royal-600 transition-colors duration-300"
              >
                Make Another Donation
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Donation Impact */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-soft-xl sticky top-24"
                >
                  <h2 className="text-2xl font-bold text-royal-500 mb-6">Your Impact</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <FaHeart className="text-royal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">₹500</h3>
                        <p className="text-gray-600 text-sm">Provides educational materials for 5 children</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <FaHeart className="text-royal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">₹1,000</h3>
                        <p className="text-gray-600 text-sm">Sponsors health awareness sessions for a community</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <FaHeart className="text-royal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">₹5,000</h3>
                        <p className="text-gray-600 text-sm">Funds skill development training for women</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <FaHeart className="text-royal-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">₹10,000</h3>
                        <p className="text-gray-600 text-sm">Supports a complete community development project</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-accent rounded-lg">
                    <p className="text-royal-500 text-sm italic">
                      "Your donation is tax-deductible under Section 80G of the Income Tax Act."
                    </p>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Donation Form */}
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-soft-xl"
                >
                  <h2 className="text-2xl font-bold text-royal-500 mb-6">Donation Details</h2>
                  
                  <form onSubmit={handleSubmit}>
                    {/* Donation Amount */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Donation Amount</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {donationOptions.map((option) => (
                          <button
                            key={option.amount}
                            type="button"
                            className={`py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                              donationAmount === option.amount 
                                ? 'border-royal-500 bg-royal-50 text-royal-500' 
                                : 'border-gray-200 hover:border-royal-300'
                            }`}
                            onClick={() => handleAmountSelect(option.amount)}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      
                      {donationAmount === 'custom' && (
                        <div className="mt-4">
                          <label htmlFor="customAmount" className="sr-only">Custom Amount</label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                            <input
                              type="number"
                              id="customAmount"
                              value={customAmount}
                              onChange={handleCustomAmountChange}
                              placeholder="Enter amount"
                              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                              min="1"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Donor Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={donorInfo.name}
                            onChange={handleDonorInfoChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={donorInfo.email}
                            onChange={handleDonorInfoChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={donorInfo.phone}
                            onChange={handleDonorInfoChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={donorInfo.address}
                            onChange={handleDonorInfoChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          value={donorInfo.message}
                          onChange={handleDonorInfoChange}
                          rows="3"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-transparent"
                          placeholder="Share why you're donating..."
                        ></textarea>
                      </div>
                    </div>
                    
                    {/* Payment Method */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          className={`flex items-center justify-center gap-3 py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                            paymentMethod === 'card' 
                              ? 'border-royal-500 bg-royal-50 text-royal-500' 
                              : 'border-gray-200 hover:border-royal-300'
                          }`}
                          onClick={() => setPaymentMethod('card')}
                        >
                          <FaRegCreditCard />
                          <span>Credit/Debit Card</span>
                        </button>
                        <button
                          type="button"
                          className={`flex items-center justify-center gap-3 py-3 px-4 rounded-lg border-2 transition-all duration-300 ${
                            paymentMethod === 'upi' 
                              ? 'border-royal-500 bg-royal-50 text-royal-500' 
                              : 'border-gray-200 hover:border-royal-300'
                          }`}
                          onClick={() => setPaymentMethod('upi')}
                        >
                          <FaRegMoneyBillAlt />
                          <span>UPI/Net Banking</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                      className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-white font-medium text-lg transition-all duration-300 ${
                        (!donationAmount || (donationAmount === 'custom' && !customAmount))
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-gradient-to-r from-royal-500 to-blue-500 hover:shadow-glow'
                      }`}
                    >
                      <FaHandHoldingHeart />
                      <span>Complete Donation</span>
                    </button>
                    
                    <p className="mt-4 text-center text-sm text-gray-500">
                      Your donation is secure and encrypted. By donating, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-royal-500 mb-4">Why People Donate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our supporters about why they choose to donate to Jayashree Foundation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I've seen firsthand the impact that Jayashree Foundation has on communities. Their work in education is transforming lives.",
                name: "Priya Sharma",
                title: "Regular Donor"
              },
              {
                quote: "Supporting Jayashree Foundation allows me to contribute to meaningful change. Their transparency and dedication is inspiring.",
                name: "Rahul Patel",
                title: "Monthly Supporter"
              },
              {
                quote: "The foundation's focus on women's empowerment resonates with me. I'm proud to support their mission and vision.",
                name: "Anita Desai",
                title: "Corporate Partner"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft-xl relative"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-royal-500 text-white flex items-center justify-center rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-6">
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-royal-100 rounded-full flex items-center justify-center text-royal-500 font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
