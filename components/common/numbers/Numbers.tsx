'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NumbersContent from './NumbersContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Numbers() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const items = context.selector('.item');
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <NumbersContent />
    </div>
  );
}
