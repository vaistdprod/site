'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import IntroContent from "./IntroContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intro({ serviceData }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const textContent = context.selector(".row.lg-marg > .col-lg-8");
      const numbers = context.selector(".numbers");
      const imgBox = context.selector(".col-lg-4 .img-full");

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
        .from(textContent, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          numbers,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          imgBox,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <IntroContent serviceData={serviceData} />
    </div>
  );
}
