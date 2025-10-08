import HeroSection from "../components/Home/HeroSection";
import Cards from "../components/Cards";
import About from "../components/Home/About";
import FocusAreas from "../components/Home/FocusAreas";
import Impact from "../components/Home/Impact";
import LatestUpdate from "../components/Home/LatestaUpdate";
import Supporters from "../components/Supporters";


const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <Cards />
      <About />
      <FocusAreas />
      <LatestUpdate />
      <div
        className="bg-[#0C193C] text-white font-bold lg:text-4xl text-md font-serif flex items-center justify-center
        py-10"
      >
        <h1 className=" font-medium">
          Impact
        </h1>
      </div>
      <Impact />
      <div
        className="bg-[#0C193C] text-white font-bold lg:text-xl text-md flex items-center justify-center
        py-10"
      >
        <h1 className=" font-medium lg:mx-0 mx-10 text-center">
          1 Hour a Week of Goodness can bring so much impact . Be a part & make
          someones Dream Come True !
        </h1>
      </div>
      
      <div
        className="bg-white text-black font-bold lg:text-4xl text-lg flex items-center justify-center
        py-10"
      >
        <h1 className="font-bold">
        Supporters & Partners
        </h1>
      </div>
      <Supporters />
    </div>
  );
};
export default Home;
