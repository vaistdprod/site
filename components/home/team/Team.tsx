'use client';

import React, { useRef } from 'react';
import TeamContent from './TeamContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Member } from '@/types';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TeamProps {
  members: Member[];
}

export default function Team({ members }: TeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const selector = gsap.utils.selector(containerRef.current);
    const elements = {
      secHead: selector('.sec-head'),
      teamItems: selector('.item')
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
    .from(elements.teamItems, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <TeamContent members={members} />
    </div>
  );
}
