
import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=1920" 
          alt="Lake Kivu Rwanda" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-1 rounded-full mb-6 border border-white/30">
            <span className="text-sm font-semibold tracking-wider uppercase">Eco-Friendly Resort</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Find Your Peace at <span className="italic">Macheo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed font-light">
            {BUSINESS_INFO.tagline}. Discover luxury eco-living in the heart of Kibuye.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <a 
              href="#accommodations" 
              className="bg-nature-green hover-nature-green text-white px-8 py-4 rounded-full font-bold text-center transition-all transform hover:scale-105 shadow-xl"
            >
              Check Availability
            </a>
            <a 
              href="#contact" 
              className="bg-white text-nature-green hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-center transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-gray-300" />
                <span className="text-white font-bold ml-1">{BUSINESS_INFO.googleRating}</span>
              </div>
              <span className="text-xs text-gray-300 uppercase tracking-widest">{BUSINESS_INFO.googleReviewCount} Google Reviews</span>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-gray-300" />
                <span className="text-white font-bold ml-1">{BUSINESS_INFO.tripAdvisorRating}</span>
              </div>
              <span className="text-xs text-gray-300 uppercase tracking-widest">{BUSINESS_INFO.tripAdvisorReviewCount} TripAdvisor Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white opacity-70">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-px h-12 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
