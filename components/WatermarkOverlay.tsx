
import React from 'react';
import { LOGO_URL } from '../constants';

const WatermarkOverlay: React.FC = () => {
  if (!LOGO_URL) return null;
  
  // Single large watermark in the bottom-right corner
  // Increased size: w-12 (48px) on mobile, w-20 (80px) on desktop
  // Slightly increased opacity for better visibility since it's just one
  return (
    <img 
      src={LOGO_URL} 
      className="absolute bottom-3 right-3 w-12 h-12 md:w-24 md:h-24 opacity-40 pointer-events-none z-10 select-none object-contain" 
      alt="" 
    />
  );
};

export default WatermarkOverlay;
