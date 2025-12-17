
import React from 'react';
import { Content } from '../types';
import { Utensils, Home, Briefcase, Box, HardHat, Armchair, Palette } from 'lucide-react';

interface ServicesProps {
  content: Content['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Restaurant': return <Utensils className="w-6 h-6 text-neutral-800" />;
      case 'Home': return <Home className="w-6 h-6 text-neutral-800" />;
      case 'Cabinet': return <Box className="w-6 h-6 text-neutral-800" />;
      case 'Commercial': return <Briefcase className="w-6 h-6 text-neutral-800" />;
      case 'Construction': return <HardHat className="w-6 h-6 text-neutral-800" />;
      case 'Furniture': return <Armchair className="w-6 h-6 text-neutral-800" />;
      case 'Branding': return <Palette className="w-6 h-6 text-neutral-800" />;
      default: return <Home className="w-6 h-6 text-neutral-800" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 border-b border-neutral-200 pb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            {content.title}
          </h2>
          <p className="text-neutral-500 font-light text-lg">
            {content.subtitle}
          </p>
        </div>

        {/* Grid layout adapts for 6 items now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {content.items.map((item, index) => (
            <div key={index} className="group flex flex-col items-start border-l-2 border-transparent hover:border-neutral-900 pl-0 hover:pl-6 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
