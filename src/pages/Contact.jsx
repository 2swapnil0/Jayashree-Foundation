import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Send Message</button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
              <div className="relative h-[400px] rounded-lg shadow-lg">
                <iframe
                  title="map"
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Jayashree Foundation | Navi Mumbai, Room No -17,Plot No. 46, Sahyadri Society, Dharshana Society, Nerul West, Sector 16 A, Navi Mumbai, Maharashtra 400706&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                  className="absolute left-0 top-0 h-full w-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;