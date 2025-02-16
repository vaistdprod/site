'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FeatContent from './FeatContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Feat({ serviceData }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const featItems = context.selector('.col-lg-3');
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }).from(featItems, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <FeatContent serviceData={serviceData} />
    </div>
  );
}
