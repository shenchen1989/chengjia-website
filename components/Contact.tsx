import React from 'react';
import { Content } from '../types';
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import { LOGO_URL } from '../constants';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <footer id="contact" className="bg-white border-t border-stone-100 pt-24 pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          
          {/* Contact Info */}
          <div>
            <div className="mb-10">
                <div className="font-serif text-2xl font-bold tracking-tight mb-6">CJ Studio</div>
                <h2 className="text-4xl font-serif text-stone-900 mb-4">{content.title}</h2>
                <p className="text-stone-500 font-light text-lg">{content.subtitle}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <MapPin className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900 text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-stone-600 font-light">{content.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <Mail className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900 text-sm uppercase tracking-wider mb-1">{content.email}</h4>
                  <a href="mailto:info@chengjiadesign.com" className="text-stone-600 font-light hover:text-stone-900 hover:underline transition-colors block text-lg">
                    info@chengjiadesign.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <MessageCircle className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900 text-sm uppercase tracking-wider mb-1">{content.wechat}</h4>
                  <p className="text-stone-600 font-light">ID: ChengjiaDesign</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <Globe className="text-stone-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-stone-900 text-sm uppercase tracking-wider mb-1">Website</h4>
                  <a href="https://chengjiadesign.com" className="text-stone-600 font-light hover:text-stone-900 transition-colors">
                    www.chengjiadesign.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-[#fafaf9] p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{content.formName}</label>
                <input type="text" className="w-full bg-white px-4 py-3 border-b-2 border-stone-200 focus:border-stone-900 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{content.formEmail}</label>
                <input type="text" className="w-full bg-white px-4 py-3 border-b-2 border-stone-200 focus:border-stone-900 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">{content.formMessage}</label>
                <textarea rows={4} className="w-full bg-white px-4 py-3 border-b-2 border-stone-200 focus:border-stone-900 outline-none transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white font-medium py-4 uppercase tracking-widest hover:bg-stone-700 transition-colors">
                {content.formSubmit}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} CJ Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-stone-600">chengjiadesign.com</a>
             <span>Privacy</span>
             <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;