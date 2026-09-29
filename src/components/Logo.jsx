import React from 'react';

export default function Logo({ className = '', size = 'md', theme = 'light' }) {
  // Height sizing
  const heightClasses = {
    sm: 'h-9',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20',
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  // Select appropriate logo asset based on background theme
  const logoSrc = theme === 'dark'
    ? '/images/tenziaa-logo-dark.png'
    : '/images/tenziaa-logo-light.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Tenziaa Wellness and Beauty Clinic"
        className={`${currentHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
