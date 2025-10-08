import React from "react";
import { Link } from "react-router-dom";
import Education from '../../Images/Home/FocusedAreas/Education.jpg';
import Health from '../../Images/Home/FocusedAreas/Health.jpg';
import Empowerment from '../../Images/Home/FocusedAreas/Empowerment.jpg';

const FocusAreas = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Education} alt="Education" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Education</h3>
              <p className="text-gray-600 mb-4">Holistic education and quality skill development of rural masses & women.</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Health} alt="Health" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Health</h3>
              <p className="text-gray-600 mb-4">Awareness & Guidance on Menstrual Health and Puberty amongst the masses.</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={Empowerment} alt="Environment" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Environment</h3>
              <p className="text-gray-600 mb-4">Mentoring, Guiding and creating the entrepreneurial and self-reliance mindset.</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
