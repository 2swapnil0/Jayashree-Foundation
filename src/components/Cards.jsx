import React from 'react';
import { FaBullseye, FaProjectDiagram, FaUsers } from 'react-icons/fa';

const Cards = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaBullseye className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">Our Goal, Vision & Commitment</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaProjectDiagram className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Our Projects</h3>
            <p className="text-gray-600">Register & Help Make Change</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Get Involved</h3>
            <p className="text-gray-600">Volunteer, Participate, or Donate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;