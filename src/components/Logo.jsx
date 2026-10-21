import React from 'react';

export default function Logo({ className = '', size = 'md', theme = 'light', src }) {
  // Height sizing
  const heightClasses = {
    sm: 'h-9 sm:h-11',
    md: 'h-11 sm:h-13 md:h-14',
    lg: 'h-14 md:h-20',
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  // Select appropriate logo asset based on background theme
  const logoSrc = src || (theme === 'dark'
    ? '/images/tenziaa-footer-logo.png'
    : '/tenzia dharmapuri final logo.png');

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Tenziaa Wellness and Aesthetic Clinic Dharmapuri"
        className={`${currentHeight} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
