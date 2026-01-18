
import React from 'react';
import { Users, CreditCard, ArrowRight } from 'lucide-react';
import { ACCOMMODATIONS } from '../../constants';

const AccommodationSection: React.FC = () => {
  return (
    <section id="accommodations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Your Sanctuary</span>
          <h2 className="text-4xl md:text-5xl font-bold text-earthy-dark mb-4 italic">Accommodations & Camping</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose between our comfortable eco-lodge rooms or immerse yourself in the wild with our premium camping options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ACCOMMODATIONS.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-nature-green shadow-sm">
                  Available Now
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.capacity}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                  <span className="text-nature-green font-bold text-lg">{item.price}</span>
                  <a href="#contact" className="flex items-center text-sm font-bold uppercase tracking-wider text-nature-green hover:underline">
                    Book <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic mb-6 text-sm">Prices vary by season. Discounts available for long-term stays.</p>
          <button className="bg-nature-green text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all">
            View All Room Types
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
