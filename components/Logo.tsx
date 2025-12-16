
import React from 'react';
import { LOGO_URL } from '../constants';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", color = "currentColor" }) => {
  // If a LOGO_URL is provided in constants.ts, use the image.
  if (LOGO_URL) {
    return (
      <img 
        src={LOGO_URL} 
        alt="CJ Studio Logo" 
        className={`${className} object-contain`} 
      />
    );
  }

  // Fallback: Simple text-based logo if no image URL is provided yet
  // Using a circle and text is safer than guessing the complex shape
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="CJ Studio Logo"
    >
      <rect x="5" y="5" width="90" height="90" rx="20" stroke={color} strokeWidth="6" />
      <text 
        x="50" 
        y="65" 
        textAnchor="middle" 
        fill={color} 
        fontSize="50" 
        fontFamily="serif" 
        fontWeight="bold"
      >
        CJ
      </text>
    </svg>
  );
};

export default Logo;
