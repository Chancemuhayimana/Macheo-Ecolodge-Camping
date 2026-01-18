
import React from 'react';
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-8 h-8 text-green-300" />
              <span className="text-2xl font-bold font-serif italic">Macheo</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Kibuye's premier eco-friendly destination for travelers seeking peace, nature, and comfort overlooking Lake Kivu.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Explore</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">Accommodations</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-1 shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300 shrink-0" />
                <span>info@macheo-kibuye.rw</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Reservation</h4>
            <p className="text-gray-300 mb-2 font-medium">Daily Availability</p>
            <p className="text-gray-400 text-sm mb-4">Check-in: {BUSINESS_INFO.checkIn}</p>
            <p className="text-gray-400 text-sm mb-6">Check-out: {BUSINESS_INFO.checkOut}</p>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="inline-block bg-white text-nature-green font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Call to Book
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Macheo Ecolodge-Camping. All rights reserved.</p>
          <p className="mt-2 italic">Preserving the beauty of Rwanda, one stay at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
