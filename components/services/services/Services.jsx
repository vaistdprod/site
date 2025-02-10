'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServicesContent from './ServicesContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services({ services }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const secHead = context.selector('.sec-head');
      const serviceItems = context.selector('.item');

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(secHead, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from(
          serviceItems,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <ServicesContent services={services} />
    </div>
  );
}
