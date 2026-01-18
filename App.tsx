
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import AccommodationSection from './components/Sections/Accommodation';
import Amenities from './components/Sections/Amenities';
import Gallery from './components/Sections/Gallery';
import Reviews from './components/Sections/Reviews';
import Location from './components/Sections/Location';
import Contact from './components/Sections/Contact';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <AccommodationSection />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Persistent Floating Contact Actions for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 md:hidden">
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl animate-pulse"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="bg-nature-green text-white p-4 rounded-full shadow-2xl"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Newsletter / Booking Bar (Desktop Only - Sticky Bottom) */}
      <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-8 py-3 z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="bg-nature-green/10 text-nature-green px-3 py-1 rounded text-xs font-bold">Limited Offer</span>
            <p className="text-sm font-medium text-gray-600 underline">Book directly and save 10% on your first stay!</p>
          </div>
          <div className="flex items-center space-x-6">
             <div className="flex flex-col text-right">
                <span className="text-[10px] uppercase font-bold text-gray-400">Current Rate</span>
                <span className="text-sm font-bold text-nature-green">From RF 64,287 / Night</span>
             </div>
             <a href="#accommodations" className="bg-nature-green text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-opacity-90 transition-all">
                Check Dates
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
