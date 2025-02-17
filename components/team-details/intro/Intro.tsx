'use client';

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroContent from "./IntroContent";
import type { Member } from '@/lib/team';
import isInView from "@/common/isInView";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface IntroProps {
    memberData: Member;
}

export default function Intro({ memberData }: IntroProps) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const firstRow = context.selector?.('.row.md-marg.justify-around.bord');
      const secondRow = context.selector?.('.row.md-marg.justify-around.mt-80');
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(firstRow, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from(
          secondRow,
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

    useEffect(() => {
      function handleShowProgressValues() {
        isInView({
          selector: ".skill-progress .progres",
          isElements: true,
          callback: (element: HTMLElement) => {
            element.style.width = element.getAttribute("data-value")!;
          }
        });
      }
      window.addEventListener("scroll", handleShowProgressValues);
      handleShowProgressValues();
      return () => window.removeEventListener("scroll", handleShowProgressValues);
    }, []);

    return (
        <div ref={containerRef}>
            <IntroContent memberData={memberData} />
        </div>
    )
}
