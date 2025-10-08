import React from 'react';
import { SiWorldhealthorganization } from "react-icons/si";
import { PiBooksFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { BsLaptop } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import CountUp from 'react-countup';

const Impact = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <SiWorldhealthorganization className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={60000} duration={5} />
            </h3>
            <p className="text-gray-600">Volunteer Hours</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <BsFillPeopleFill className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={10000} duration={5} />
            </h3>
            <p className="text-gray-600">Beneficiaries</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <PiBooksFill className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={8000} duration={5} />
            </h3>
            <p className="text-gray-600">Books Distributed</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaHandsAslInterpreting className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={30} duration={5} />+
            </h3>
            <p className="text-gray-600">Events</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <BsLaptop className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={50} duration={5} />
            </h3>
            <p className="text-gray-600">E-Classes</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <ImLocation2 className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-gray-800">
              <CountUp end={6} duration={5} />
            </h3>
            <p className="text-gray-600">States</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;