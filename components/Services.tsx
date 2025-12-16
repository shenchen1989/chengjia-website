import React from 'react';
import { Content } from '../types';
import { Utensils, Home, Briefcase, Box } from 'lucide-react';

interface ServicesProps {
  content: Content['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Restaurant': return <Utensils className="w-6 h-6 text-stone-800" />;
      case 'Home': return <Home className="w-6 h-6 text-stone-800" />;
      case 'Cabinet': return <Box className="w-6 h-6 text-stone-800" />; // Box represents custom cabinetry/packages
      case 'Commercial': return <Briefcase className="w-6 h-6 text-stone-800" />;
      default: return <Home className="w-6 h-6 text-stone-800" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 border-b border-stone-100 pb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            {content.title}
          </h2>
          <p className="text-stone-500 font-light text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.items.map((item, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 bg-stone-100 rounded-sm flex items-center justify-center mb-6 transition-colors group-hover:bg-stone-200">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">
                {item.title}
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
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