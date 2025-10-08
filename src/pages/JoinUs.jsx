import React from 'react'
import TopButton from '../components/BacktoTop'
import NavbarItems from '../components/Navbar'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer'
import Map from '../components/Contact/Map'
import MasonryAbout from '../components/About/MasonryAbout'
import CardsJoinus from '../components/Joinus/CardsJoinUs'

const JoinUs = () => {
  return (
    <div className='bg-white'>
        <TopButton />
        <NavbarItems />
        <div
        className="bg-white text-[#0C193C] font-bold lg:text-6xl text-3xl flex items-center justify-center
        py-10"
      >
        <h1 className="font-bold">Join Us</h1>
      </div>
      <div
        className="bg-white text-black lg:text-xl text-md  flex items-center justify-center">
        <h1 className="lg:text-xl text-sm  font-normal text-center lg:mx-40 mx-10 ">Join our team as a volunteer or intern and get in touch for CSR projects or collaborations .
            <br />
             Alone we can do so little but together we can do much.</h1>
        </div>
        <CardsJoinus />
        <Footer />   
    </div>
  )
}

export default JoinUs;