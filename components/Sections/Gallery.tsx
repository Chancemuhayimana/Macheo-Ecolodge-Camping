
import React, { useState } from 'react';
import { GALLERY } from '../../constants';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Rooms', 'Exterior', 'Amenities', 'Food', 'Nature'];

  const filteredImages = activeCategory === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-earthy-dark mb-4 italic">Captured Moments</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat 
                  ? 'bg-nature-green text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div key={image.id} className="group relative aspect-video overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-nature-green/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6">
                <span className="text-xs uppercase tracking-[0.3em] mb-2">{image.category}</span>
                <p className="text-lg font-bold text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
