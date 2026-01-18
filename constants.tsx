
import React from 'react';
import { 
  Wifi, 
  Coffee, 
  Car, 
  Waves, 
  Dog, 
  Baby, 
  Tent, 
  Mountain, 
  MapPin, 
  Phone, 
  Clock, 
  Star 
} from 'lucide-react';
import { Amenity, Accommodation, Testimonial, GalleryImage } from './types';

export const BUSINESS_INFO = {
  name: "Macheo Ecolodge-Camping",
  tagline: "Experience the Serenity of Lake Kivu",
  description: "Nestled in the lush hills of Kibuye, Macheo offers a perfect blend of modern comfort and rustic charm. Our eco-friendly lodge is your gateway to the tranquil beauty of Rwanda's landscape.",
  location: "BP 19, Kibuye, Rwanda",
  plusCode: "W8RX+FV Kibuye",
  phone: "+250 788 826 223",
  whatsapp: "+250788826223",
  googleRating: 4.2,
  googleReviewCount: 86,
  tripAdvisorRating: 4.3,
  tripAdvisorReviewCount: 15,
  checkIn: "14:00",
  checkOut: "12:00",
  priceRange: "RF 64,287 – RF 65,687",
};

export const AMENITIES: Amenity[] = [
  { id: '1', label: 'Free High-speed Wi-Fi', icon: <Wifi className="w-6 h-6" /> },
  { id: '2', label: 'Free Organic Breakfast', icon: <Coffee className="w-6 h-6" /> },
  { id: '3', label: 'Secured Free Parking', icon: <Car className="w-6 h-6" /> },
  { id: '4', label: 'Lakeside Swimming Pool', icon: <Waves className="w-6 h-6" /> },
  { id: '5', label: 'Pet-Friendly Stays', icon: <Dog className="w-6 h-6" /> },
  { id: '6', label: 'Family & Kid Friendly', icon: <Baby className="w-6 h-6" /> },
  { id: '7', label: 'Eco-Camping Facilities', icon: <Tent className="w-6 h-6" /> },
  { id: '8', label: 'Lake & Mountain Views', icon: <Mountain className="w-6 h-6" /> },
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'room-1',
    title: 'Deluxe Lake View Room',
    description: 'Spacious room featuring a private balcony with panoramic views of Lake Kivu. Includes premium bedding and eco-friendly amenities.',
    price: 'From RF 65,000 / Night',
    capacity: '2 Adults, 1 Child',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'tent-1',
    title: 'Safari Eco-Camping',
    description: 'Immerse yourself in nature with our pre-pitched safari tents. Enjoy the sounds of the night with modern mattress comforts.',
    price: 'From RF 35,000 / Night',
    capacity: '2 People',
    image: 'https://images.unsplash.com/photo-1496080174650-637e3f22fa03?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'family-1',
    title: 'Garden Family Suite',
    description: 'Designed for families, this suite offers two connected bedrooms and easy access to our kid-friendly play areas.',
    price: 'From RF 85,000 / Night',
    capacity: '4 People',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    rating: 5,
    comment: 'The lake and mountain views are truly fantastic. The staff treated us like family, and the food was fresh and delicious!',
    date: '2 months ago',
  },
  {
    id: 't2',
    name: 'Marc Dupon',
    rating: 4,
    comment: 'Beautiful eco-lodge. Very calm and relaxing. Perfect for nature lovers visiting Kibuye.',
    date: '1 month ago',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    comment: 'Best camping experience in Rwanda. The facilities are clean and the sunrise over Lake Kivu is worth every penny.',
    date: '3 weeks ago',
  },
];

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', category: 'Nature', alt: 'Lake Kivu Sunrise' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800', category: 'Rooms', alt: 'Bed with view' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800', category: 'Amenities', alt: 'Swimming Pool' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1466633364253-189f7823f66c?auto=format&fit=crop&q=80&w=800', category: 'Food', alt: 'Local Breakfast' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800', category: 'Exterior', alt: 'Lodge Exterior' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=800', category: 'Nature', alt: 'Kibuye Hills' },
];
