'use client';

import React, { useRef } from 'react';
import NumbersContent from './NumbersContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Numbers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const selector = gsap.utils.selector(containerRef.current);
    const elements = {
      secHead: selector('.sec-head'),
      items: selector('.item')
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
    .from(elements.items, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.3');

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <NumbersContent />
    </div>
  );
}
