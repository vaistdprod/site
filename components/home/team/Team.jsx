// components/home/Team.jsx
'use client';

import React, { useRef } from "react";
import TeamContent from "./TeamContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team({ members = [] }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const secHead = context.selector(".sec-head");
      const teamItems = context.selector(".item");
      gsap.from(secHead, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
      gsap.from(teamItems, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <TeamContent members={members} />
    </div>
  );
}
