import React from 'react';
import { Content, PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';

interface PortfolioProps {
  content: Content['portfolio'];
}

const Portfolio: React.FC<PortfolioProps> = ({ content }) => {
  return (
    <section id="portfolio" className="py-24 bg-[#fafaf9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
            {content.title}
          </h2>
          <p className="text-stone-500 font-light">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item: PortfolioItem) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-stone-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;