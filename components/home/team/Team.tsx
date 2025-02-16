'use client';

import React, { useRef } from "react";
import TeamContent from "./TeamContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { Member } from '@/lib/team';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TeamProps {
  members: Member[];
}

export default function Team({ members }: TeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      secHead: '.sec-head',
      teamItems: '.item'
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
      duration: 0.8,
      ease: 'power3.out',
    })
    .from(elements.teamItems, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.4');

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <TeamContent members={members} />
    </div>
  );
}