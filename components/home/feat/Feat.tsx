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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      leftCont: '.col-lg-5 .cont',
      featH6: '.feat-h6',
      featH3: '.feat-h3',
      featParagraph: '.feat-paragraph',
      featLink: '.btn-crev',
      rightItems: '.col-lg-6 .item'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Animate left content
    tl.from(elements.leftCont, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Animate headings
    tl.from(
      [elements.featH6, elements.featH3],
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      },
      '-=0.5'
    );

    // Animate paragraph
    tl.from(
      elements.featParagraph,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // Animate link
    tl.from(
      elements.featLink,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.5'
    );

    // Animate right items
    tl.from(
      elements.rightItems,
      {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <FeatContent />
    </div>
  );
}