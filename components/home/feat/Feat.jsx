'use client';

import React, { useRef } from 'react';
import FeatContent from './FeatContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Feat() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const leftCont = context.selector('.col-lg-5 .cont');
      const featH6 = context.selector('.feat-h6');
      const featH3 = context.selector('.feat-h3');
      const featParagraph = context.selector('.feat-paragraph');
      const featLink = context.selector('.btn-crev');
      const rightItems = context.selector('.col-lg-6 .item');

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
        .from(leftCont, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from(
          [featH6, featH3],
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        )
        .from(
          featParagraph,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          featLink,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          rightItems,
          {
            x: 50,
            opacity: 0,
            duration: 1,
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
      <FeatContent />
    </div>
  );
}
