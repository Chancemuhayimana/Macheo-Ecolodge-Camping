
import React from 'react';
import { MapPin, Compass, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Location</span>
            <h2 className="text-4xl font-bold text-earthy-dark mb-6 italic leading-tight">Finding Your Way to Paradise</h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Located in the scenic district of Kibuye, Rwanda, Macheo is easily accessible by road from Kigali (approx. 3.5 hours) or via boat from other lakeside towns.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-nature-green/5 rounded-full">
                  <MapPin className="w-6 h-6 text-nature-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{BUSINESS_INFO.location}</p>
                  <p className="text-xs text-nature-green font-mono mt-1">Plus Code: {BUSINESS_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-nature-green/5 rounded-full">
                  <Compass className="w-6 h-6 text-nature-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Nearby Landmarks</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Lake Kivu Waterfront (Walking Distance)</li>
                    <li>• Kibuye Marketplace (10 min drive)</li>
                    <li>• Nearby Mountain Resorts (5-15 min)</li>
                  </ul>
                </div>
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-nature-green text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.791552528173!2d29.351667!3d-2.066667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcd6f87493df23%3A0xc3f98240f9012a67!2sKibuye%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1716383214152!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Macheo Location"
            ></iframe>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-nature-green uppercase tracking-wider">Kibuye, Rwanda</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
