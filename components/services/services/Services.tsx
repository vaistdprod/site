'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ServicesContent from './ServicesContent';
import { Service } from '@/lib/services';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesProps {
  services: Record<string, Pick<Service, 'title' | 'icon' | 'desc' | 'link' | 'tags'>>;
}

export default function Services({ services }: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      secHead: '.sec-head',
      serviceItems: '.item'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(elements.secHead, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(elements.serviceItems, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <ServicesContent services={services} />
    </div>
  );
}
