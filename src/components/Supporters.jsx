import React from 'react';
import logo1 from '../assets/logos/3m.svg';
import logo2 from '../assets/logos/barstool-store.svg';
import logo3 from '../assets/logos/budweiser.svg';
import logo4 from '../assets/logos/buzzfeed.svg';
import logo5 from '../assets/logos/forbes.svg';
import logo6 from '../assets/logos/macys.svg';
import logo7 from '../assets/logos/menshealth.svg';
import logo8 from '../assets/logos/mrbeast.svg';

const Supporters = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Supporters & Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex justify-center items-center">
            <img src={logo1} alt="3M" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo2} alt="Barstool Store" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo3} alt="Budweiser" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo4} alt="Buzzfeed" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo5} alt="Forbes" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo6} alt="Macys" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo7} alt="Mens Health" className="h-12" />
          </div>
          <div className="flex justify-center items-center">
            <img src={logo8} alt="Mr Beast" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;