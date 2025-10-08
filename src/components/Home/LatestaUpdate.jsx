import React from "react";
import { Link } from "react-router-dom";
import TreePlantation from '../../Images/Home/LatestUpdates/TreePlantation.jpg';
import MaskDonation from '../../Images/Home/LatestUpdates/MaskDistribution.png';
import SponseredEducation from '../../Images/Home/LatestUpdates/SponseredEducation.jpg';

const LatestUpdate = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={TreePlantation} alt="Tree Plantation" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Tree Plantation</h3>
              <p className="text-gray-600 mb-4">We conducted Tree plantation because tree plantation is very necessary to counter Global warming...</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={MaskDonation} alt="Mask Donation" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Mask Donation</h3>
              <p className="text-gray-600 mb-4">We distributed masks to the poor people In Order to stop the spread of covid-19.</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={SponseredEducation} alt="Sponsered Education" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sponsered Education</h3>
              <p className="text-gray-600 mb-4">We sponsored the education of students who were unable to pay their school fees.</p>
              <Link to="/blog" className="text-blue-500 hover:underline">Read More</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/blog" className="bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-blue-600">View All Updates</Link>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdate;
