
import React from 'react';
import { Content } from '../types';
import { Utensils, Home, Briefcase, Box, HardHat, Armchair, Palette } from 'lucide-react';

interface ServicesProps {
  content: Content['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Restaurant': return <Utensils className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Cabinet': return <Box className="w-5 h-5" />;
      case 'Commercial': return <Briefcase className="w-5 h-5" />;
      case 'Construction': return <HardHat className="w-5 h-5" />;
      case 'Furniture': return <Armchair className="w-5 h-5" />;
      case 'Branding': return <Palette className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-32 bg-transparent relative">
      {/* Optional: Add a subtle local block to differentiate section but keep it open */}
      <div className="absolute inset-0 bg-morandi-200/20 -z-10 skew-y-1"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Title Area */}
            <div className="lg:col-span-4">
                <h2 className="text-4xl font-serif text-morandi-900 mb-6">
                    {content.title}
                </h2>
                <p className="text-morandi-500 font-light text-lg leading-relaxed max-w-xs">
                    {content.subtitle}
                </p>
            </div>

            {/* Right List Area */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                {content.items.map((item, index) => (
                    <div key={index} className="group flex flex-col items-start">
                        {/* Changed text-morandi-400 to text-accent-red for visual emphasis */}
                        <div className="mb-6 text-accent-red group-hover:scale-110 transition-transform duration-300">
                            {getIcon(item.icon)}
                        </div>
                        <h3 className="text-xl font-serif font-medium text-morandi-900 mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-accent-red/30">
                            {item.title}
                        </h3>
                        <p className="text-morandi-500 text-sm leading-7 font-light">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
