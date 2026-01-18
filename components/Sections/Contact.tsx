
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => setFormState('sent'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-earthy-light rounded-[3rem] p-8 md:p-16 shadow-inner overflow-hidden relative">
          {/* Subtle nature decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-nature-green opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <span className="text-nature-green font-bold uppercase tracking-widest text-sm mb-4 block">Connect With Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-earthy-dark mb-8 italic">Ready for an Adventure?</h2>
              <p className="text-gray-600 text-lg mb-10">
                Whether you have a question about our facilities or you're ready to book your stay, our team is here to help you 24/7.
              </p>

              <div className="space-y-6 mb-12">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-nature-green transition-all group">
                  <div className="p-3 bg-nature-green text-white rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Phone Number</span>
                    <span className="text-xl font-bold text-gray-900 group-hover:text-nature-green">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-nature-green transition-all group">
                  <div className="p-3 bg-green-500 text-white rounded-xl">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">WhatsApp Chat</span>
                    <span className="text-xl font-bold text-gray-900 group-hover:text-green-600">Message Our Team</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 group">
                  <div className="p-3 bg-earthy-dark text-white rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Email Address</span>
                    <span className="text-xl font-bold text-gray-900">info@macheo-kibuye.rw</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-50">
              {formState === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
                  <p className="text-gray-500">Thank you for reaching out. Our team will get back to you shortly via your provided email or phone number.</p>
                  <button onClick={() => setFormState('idle')} className="text-nature-green font-bold underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 italic">Send an Inquiry</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-nature-green transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                      <input required type="email" className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-nature-green transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message Topic</label>
                    <select className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-nature-green transition-all">
                      <option>Room Booking</option>
                      <option>Camping Inquiry</option>
                      <option>Event/Group Booking</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Message</label>
                    <textarea required rows={4} className="w-full bg-gray-50 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-nature-green transition-all" placeholder="Tell us more about your travel dates and requirements..."></textarea>
                  </div>
                  <button 
                    disabled={formState === 'sending'}
                    type="submit" 
                    className="w-full bg-nature-green text-white font-bold py-4 rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
                  >
                    {formState === 'sending' ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
