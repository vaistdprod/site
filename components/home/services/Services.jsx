// components/home/Services.jsx
'use client';

import React, { useRef } from 'react';
import ServicesContent from './ServicesContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services({ services }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const tdZarukaHeading = context.selector('.title-border');
      const partnerHeading = context.selector('.animated-heading');
      const rotateHeadings = context.selector('.rotate-heading');
      const serviceItems = context.selector('.item');

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(tdZarukaHeading, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from(
          partnerHeading,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          rotateHeadings,
          {
            opacity: 0,
            rotationX: -45,
            y: 40,
            z: -40,
            scale: 0.95,
            transformOrigin: '50% 0%',
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.3'
        )
        .from(
          serviceItems,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.3'
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
