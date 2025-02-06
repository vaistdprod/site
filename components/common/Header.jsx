'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = ({ 
  children, 
  delay = 2, 
  overlayDark = 5, 
  className, 
  bgContent 
}) => {
  const headerRef = useRef(null);

  useGSAP(
    (context) => {
      const header = headerRef.current;
      if (!header) return;
      const tl = gsap.timeline();
      tl.fromTo(
        header,
        { y: 200 },
        { y: 0, duration: 0.8, ease: 'power3.out' },
        `+=${delay}`
      );
      tl.fromTo(
        header.querySelector('.container'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0'
      );
      return () => tl.kill();
    },
    { dependencies: [] }
  );

  return (
    <div
      ref={headerRef}
      className={className}
      data-overlay-dark={overlayDark}
    >
      {bgContent}
      <div className="container relative z-7">
        {children}
      </div>
    </div>
  );
};

export default Header;
