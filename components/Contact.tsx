
import React from 'react';
import { Content, Language } from '../types';
import { Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import Logo from './Logo';

interface ContactProps {
  content: Content['contact'];
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ content, lang }) => {
  return (
    <footer id="contact" className="bg-white border-t border-neutral-100 pt-24 pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          
          {/* Contact Info */}
          <div>
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                    <Logo className="h-8 w-8 text-neutral-900" />
                    <span className="font-serif text-2xl font-bold tracking-tight text-neutral-900">
                        {lang === 'zh' ? '诚嘉设计' : 'CJ Studio'}
                    </span>
                </div>
                <h2 className="text-4xl font-serif text-neutral-900 mb-4">{content.title}</h2>
                <p className="text-neutral-500 font-light text-lg">{content.subtitle}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <MapPin className="text-neutral-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-neutral-600 font-light">{content.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <Phone className="text-neutral-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm uppercase tracking-wider mb-1">{content.phone}</h4>
                  <a href="tel:+393242609338" className="text-neutral-600 font-light hover:text-neutral-900 transition-colors block text-lg">
                    +39 3242609338
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <Mail className="text-neutral-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm uppercase tracking-wider mb-1">{content.email}</h4>
                  <a href="mailto:info@chengjiadesign.com" className="text-neutral-600 font-light hover:text-neutral-900 hover:underline transition-colors block text-lg">
                    info@chengjiadesign.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <MessageCircle className="text-neutral-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm uppercase tracking-wider mb-1">{content.wechat}</h4>
                  <p className="text-neutral-600 font-light">ID: moomin521</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <Globe className="text-neutral-400 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm uppercase tracking-wider mb-1">Website</h4>
                  <a href="https://chengjiadesign.com" className="text-neutral-600 font-light hover:text-neutral-900 transition-colors">
                    www.chengjiadesign.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Contact Form */}
          <div className="bg-neutral-50 p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{content.formName}</label>
                <input type="text" className="w-full bg-white px-4 py-3 border-b-2 border-neutral-200 focus:border-neutral-900 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{content.formEmail}</label>
                <input type="text" className="w-full bg-white px-4 py-3 border-b-2 border-neutral-200 focus:border-neutral-900 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{content.formMessage}</label>
                <textarea rows={4} className="w-full bg-white px-4 py-3 border-b-2 border-neutral-200 focus:border-neutral-900 outline-none transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-neutral-900 text-white font-medium py-4 uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                {content.formSubmit}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} CJ Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-neutral-600">chengjiadesign.com</a>
             <span>Privacy</span>
             <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
