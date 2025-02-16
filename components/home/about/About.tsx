'use client';

import React, { useRef, useEffect } from 'react';
import AboutContent from './AboutContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from('.col-lg-5', {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from('.cont', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return <div ref={containerRef}><AboutContent /></div>;
}
