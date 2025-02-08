// components/home/Intro.jsx
'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import IntroContent from "./IntroContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intro() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const imgContainer = context.selector(".img");
      const textContainer = context.selector(".cont");

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
        .from(imgContainer, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          textContainer,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <IntroContent />
    </div>
  );
}
