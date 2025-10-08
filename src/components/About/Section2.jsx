import React from "react";

const Section2 = () => {
  return (
    <section className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
        <div className="ml-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
            Our Vision
          </h1>
          <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl ">
            Sach Kare Sapne ! Dreams in Life & Smiles on Faces ! Every one has a
            dream and we shall help people realize and fulfill their dream by
            providing literacy skills and social development and make a
            difference in this world .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
