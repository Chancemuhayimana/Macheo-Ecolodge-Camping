
import React from 'react';
import { AMENITIES } from '../../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-earthy-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Thoughtful Comforts</span>
            <h2 className="text-4xl md:text-5xl font-bold text-earthy-dark mb-6 italic">Modern Amenities in a Natural Setting</h2>
            <p className="text-gray-600 text-lg">
              We provide everything you need to feel at home while you explore the wonders of Lake Kivu and the surrounding mountains.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <img src={`https://picsum.photos/seed/${i}/200/200`} alt="Activity" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-nature-green flex items-center justify-center text-white font-bold text-xs shadow-md">
                +12
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => (
            <div key={amenity.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-nature-green/30 transition-all group">
              <div className="w-12 h-12 bg-nature-green/5 rounded-xl flex items-center justify-center text-nature-green mb-6 group-hover:bg-nature-green group-hover:text-white transition-all">
                {amenity.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-900">{amenity.label}</h4>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-nature-green rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl font-bold mb-6">Experience Local Activities</h3>
            <p className="text-green-100 mb-8 leading-relaxed text-lg">
              From bird watching and boat trips to hiking the Congo Nile Trail, our team can help organize a wide range of outdoor adventures during your stay.
            </p>
            <button className="bg-white text-nature-green font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
              Discover Activities
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <path d="M50,150 Q100,50 150,150 T250,150 T350,150" fill="none" stroke="currentColor" strokeWidth="20" />
              <path d="M50,200 Q100,100 150,200 T250,200 T350,200" fill="none" stroke="currentColor" strokeWidth="20" />
              <path d="M50,250 Q100,150 150,250 T250,250 T350,250" fill="none" stroke="currentColor" strokeWidth="20" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
