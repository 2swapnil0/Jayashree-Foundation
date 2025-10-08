import React from 'react';
import media1 from '../Images/Gallery/MediaCarousel/Media1.jpg';
import media2 from '../Images/Gallery/MediaCarousel/Media2.jpg';
import media3 from '../Images/Gallery/MediaCarousel/Media3.jpg';
import media4 from '../Images/Gallery/MediaCarousel/Media4.jpg';
import media5 from '../Images/Gallery/MediaCarousel/Media5.jpg';
import media6 from '../Images/Gallery/MediaCarousel/Media6.jpg';

const images = [
  { id: 1, src: media1, title: 'Image 1' },
  { id: 2, src: media2, title: 'Image 2' },
  { id: 3, src: media3, title: 'Image 3' },
  { id: 4, src: media4, title: 'Image 4' },
  { id: 5, src: media5, title: 'Image 5' },
  { id: 6, src: media6, title: 'Image 6' },
];

const Gallery = () => {
  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;