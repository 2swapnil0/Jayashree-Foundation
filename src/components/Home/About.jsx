import React from "react";
import AboutImage from '../../Images/Home/HeroCarousel/Home2.jpg';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jayashree Foundation is a Mumbai based Indian not-for-profit
              organization registered as a section 8 of The Companies Act 2013 in
              India started in 2019 and this NGO led by Vaibhav Jadhav and has
              projects all over India for education , health & development .
              Its is an initiative of like minded people and various well wishers who believe ,
              "Goodness is the only investment that never fails "and at Jayashree foundation we believe in doing good . Be it big or small efforts
              will make a difference. We are passionate about social work and you can
              start your journey too !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
