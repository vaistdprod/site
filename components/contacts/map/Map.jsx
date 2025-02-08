// components/home/Map.jsx
'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MapContent from "./MapContent";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Map() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const iframe = context.selector('iframe');
      gsap.from(iframe, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <MapContent />
    </div>
  );
}
