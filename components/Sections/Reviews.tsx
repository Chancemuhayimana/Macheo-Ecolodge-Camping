
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-earthy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Guest Experiences</span>
            <h2 className="text-4xl font-bold text-earthy-dark mb-8">What Our Guests Love About Macheo</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold text-gray-900">{BUSINESS_INFO.googleRating}</span>
                <div className="flex text-yellow-400">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 text-gray-200" />
                </div>
              </div>
              <p className="text-gray-500 font-medium">Average Guest Rating on Google</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-400">Based on over {BUSINESS_INFO.googleReviewCount} verified stays in the last year.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-all">
                  <Quote className="w-10 h-10 text-nature-green/10 mb-6" />
                  <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{review.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
