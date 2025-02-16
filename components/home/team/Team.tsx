'use client';

import React, { useRef } from "react";
import TeamContent from "./TeamContent";
import gsap from "gsap";

export interface TeamMember {
  slug: string;
  name: string;
  image: string;
  role: string;
  instagram: string;
  phone: string;
  email: string;
  facebook?: string;
}

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team({ members = [] }: { members: TeamMember[] }) {
  const containerRef = useRef(null);

 useGSAP(() => {
    const secHead = gsap.utils.selector(containerRef);
    gsap.from(secHead(".sec-head"), {
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
    gsap.from(secHead(".item"), {
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
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <TeamContent members={members} />
    </div>
  );
}
