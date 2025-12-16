import React from 'react';
import { Content } from '../types';
import { ArrowRight, MapPin } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative bg-[#fafaf9] overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
                <span className="h-px w-8 bg-stone-400"></span>
                <span className="text-stone-500 text-xs font-medium tracking-[0.2em] uppercase">
                    {content.experience}
                </span>
            </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-8 tracking-tight">
            {content.title}
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 mb-12 max-w-xl leading-relaxed font-light">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white text-sm uppercase tracking-widest hover:bg-stone-800 transition-all duration-300"
            >
              {content.cta}
              <ArrowRight className="ml-2" size={16} />
            </a>
            <div className="flex items-center gap-2 px-6 py-4 text-stone-500 text-sm">
                <MapPin size={16} />
                {content.location}
            </div>
          </div>
        </div>
      </div>
      
      {/* Design Elements - Minimalist Geometry */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-200/30 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
    </section>
  );
};

export default Hero;