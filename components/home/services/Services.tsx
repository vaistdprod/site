'use client';

import React, { useRef } from 'react';
import ServicesContent from './ServicesContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

import { Service } from '@/types';
import { ContextFunc, useGSAPConfig } from '@gsap/react';
import { GSAPContext } from '@/types/gsap';

interface ServicesProps {
  services: Record<string, Pick<Service, 'title' | 'icon' | 'desc' | 'link' | 'tags'>>;
}

export default function Services({ services }: ServicesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      if (!containerRef.current) return;

      const elements = {
        tdZarukaHeading: gsap.utils.selector(containerRef.current)('.title-border'),
        partnerHeading: gsap.utils.selector(containerRef.current)('.animated-heading'),
        rotateHeadings: gsap.utils.selector(containerRef.current)('.rotate-heading'),
        serviceItems: gsap.utils.selector(containerRef.current)('.item')
      };

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(elements.tdZarukaHeading, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from(
          elements.partnerHeading,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          elements.rotateHeadings,
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
          elements.serviceItems,
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
