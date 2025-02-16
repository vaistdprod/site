'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import IntroContent from "./IntroContent";
import type { Member } from '@/lib/team';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface IntroProps {
  memberData: Member;
}

export default function Intro({ memberData }: IntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      imgContainer: '.img',
      textContainer: '.cont'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(elements.imgContainer, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(elements.textContainer, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <IntroContent memberData={memberData} />
    </div>
  );
}