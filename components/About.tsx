
import React from 'react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-32 bg-white text-neutral-900"> 
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Studio Atmosphere" 
                    className="w-full h-full object-cover grayscale contrast-125 opacity-90"
                />
             </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <span className="block text-neutral-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Since 2010
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-none text-neutral-900">
              {content.title}
            </h2>
            
            <div className="space-y-8 text-neutral-600 font-light leading-loose text-base font-sans">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </div>
            
            <div className="mt-16 flex gap-16 border-t border-neutral-100 pt-10">
              <div>
                <span className="block text-5xl font-serif text-neutral-900 mb-2">{content.stats.years}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{content.stats.yearsLabel}</span>
              </div>
              <div>
                <span className="block text-5xl font-serif text-neutral-900 mb-2">{content.stats.projects}</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest">{content.stats.projectsLabel}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
