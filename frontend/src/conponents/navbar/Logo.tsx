import React from 'react';
import { Binary } from 'lucide-react';


interface LogoProps {
  className?: string;
  variant?: 'default' | 'small' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'default',
  showText = true
}) => {
  const sizes = {
    small: {
      icon: 'h-6 w-6',
      text: 'text-lg'
    },
    default: {
      icon: 'h-8 w-8',
      text: 'text-xl'
    },
    large: {
      icon: 'h-12 w-12',
      text: 'text-3xl'
    }
  };

  const currentSize = sizes[variant];

  return (
    <div className={`flex items-center gap-2 ${className}` }>
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className={`text-brand-blue ${currentSize.icon}`}>
          <Binary className="w-full h-full " />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-tr from-brand-blue/20 to-transparent blur-md rounded-full animate-pulse-subtle" />
      </div>
      
      {showText && (
        <div className={`font-bold tracking-tight flex items-center font-['sans-serif'] ${currentSize.text}`}>
          <span className="text-brand-black">Binary</span>
          <span className="text-blue-700">Digit</span>
        </div>
      )}
    </div>
  );
};

export default Logo;