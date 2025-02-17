'use client';

import React, { useRef } from 'react';
import FeatContent from './FeatContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Service } from '@/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatProps {
  serviceData: Service;
}

export default function Feat({ serviceData }: FeatProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const selector = gsap.utils.selector(containerRef.current);
    const elements = {
      featItems: selector('.col-lg-3'),
      secHead: selector('.sec-head')
    };

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    })
    .from(elements.secHead, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from(elements.featItems, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <FeatContent serviceData={serviceData} />
    </div>
  );
}
