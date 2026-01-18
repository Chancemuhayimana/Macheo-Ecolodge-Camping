
// Fix: Import React to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Amenity {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Accommodation {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  capacity: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'Rooms' | 'Exterior' | 'Amenities' | 'Food' | 'Nature';
  alt: string;
}
