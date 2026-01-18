
import React from 'react';
import { Leaf, Users, CloudSun } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-earthy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=1000" 
              alt="Macheo Eco Lodge Views" 
              className="rounded-2xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-nature-green rounded-2xl -z-0 hidden md:block opacity-20"></div>
            <div className="absolute -top-8 -left-8 border-4 border-nature-green/10 w-full h-full rounded-2xl -z-0"></div>
          </div>

          <div>
            <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-earthy-dark mb-8 leading-tight">
              Where Sustainable Luxury Meets Unspoiled Nature
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {BUSINESS_INFO.description} Our concept is built around a deep commitment to the environment and the local community of Kibuye. 
              We believe that travel should be regenerative, offering our guests a chance to disconnect from the digital world and reconnect with the Earth.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Leaf className="w-6 h-6 text-nature-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Eco-Friendly Concept</h4>
                  <p className="text-gray-500">Solar-powered facilities, rainwater harvesting, and local organic gardens.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-nature-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Friendly Staff</h4>
                  <p className="text-gray-500">Our local team provides authentic Rwandan hospitality from the heart.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <CloudSun className="w-6 h-6 text-nature-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Calm Environment</h4>
                  <p className="text-gray-500">A sanctuary of silence, birdsong, and the gentle lapping of Lake Kivu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
