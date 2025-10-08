import React from "react";
import Logo from "../../assets/logo.jpg";
import Education from '../../Images/Home/FocusedAreas/Education.jpg'
import Health from '../../Images/Home/FocusedAreas/Health.jpg'
import Empowerment from '../../Images/Home/FocusedAreas/Empowerment.jpg'
import { Link } from "react-router-dom";

const CardsJoinus = () => {
  return (
    <section className="border-b-4 border-black ">
      <h1 className="font-bold lg:text-6xl text-xl text-center text-black my-5">
        Our Focus Areas
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 mx-5 py-16 ">
        <div className="card w-96 bg-white shadow-2xl transition-all hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Education} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-xl lg:text-4xl">
              Education
            </h2>
            <p className="text-black text-center text-lg font-thin">
              Holistic education and quality skill development of rural masses &
              women .
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent transition-all text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
              <Link to={'/blog'}
                onClick={() => {
                  window.scrollTo(0, 0);
              }}
              >Read More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl transition-all hover:scale-105 h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Health} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-xl lg:text-4xl">
              Health
            </h2>
            <p className="text-black text-center text-lg font-thin">
            Awareness & Guidance on Menstrual Health and Puberty amongst the masses
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent transition-all text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
              <Link to={'/blog'}
                onClick={() => {
                  window.scrollTo(0, 0);
              }}
              >Read More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-white shadow-2xl transition-all hover:scale-105  h-[600px]">
          <figure className="px-10 pt-10">
            <img src={Empowerment} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-black font-bold text-xl lg:text-4xl">
            Empowerment
            </h2>
            <p className="text-black text-center text-lg font-thin">
            Mentoring , Guiding and creating the enterpreneurial  and self reliance mindset and earning a decent livelihood
            </p>
            <div className="card-actions">
              <button className="btn btn-primary bg-transparent transition-all text-black border-none hover:bg-transparent hover:scale-110 hover:underline">
              <Link to={'/blog'}
                onClick={() => {
                  window.scrollTo(0, 0);
              }}
              >Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsJoinus;
