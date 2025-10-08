import React from "react";
import AboutImage from '../Images/Home/HeroCarousel/Home2.jpg';

const About = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jayashree Foundation is a Mumbai based Indian not-for-profit
                organization registered as a section 8 of The Companies Act 2013 in
                India started in 2019 and is led by Vaidhei Pagaria and has projects
                accross India for education , health & development . It is an
                initiative of like minded people and various well wishers who believe
                in , "Goodness is the only investment that succeds "and at Pagaria
                welfare foundation we believe in doing good . Be it big or small good
                efforts will always make a difference . Small acts of kindness shall
                bring small changes but the impact is very significant .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jayashree Foundation aims to to provide , guide ,
                educate and create awareness about social issues . It aims to help
                people of different strata of the society to make , develop , build
                ,support and promote social welfare in areas of Education , Health &
                Development by networking with various related agencies and
                supporting them with all necessary aids and guidance..
              </p>
            </div>
            <div>
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="Mission" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="Vision" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Sach Kare Sapne ! Dreams in Life & Smiles on Faces ! Every one has a
                dream and we shall help people realize and fulfill their dream by
                providing literacy skills and social development and make a
                difference in this world .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
