// components/home/Intro.jsx
'use client';

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroContent from "./IntroContent";
import isInView from "@/common/isInView";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Intro({ memberData }) {
  const containerRef = useRef(null);

  // Attach GSAP animations to the two rows
  useGSAP(
    (context) => {
      const firstRow = context.selector('.row.md-marg.justify-around.bord');
      const secondRow = context.selector('.row.md-marg.justify-around.mt-80');
      gsap.from(firstRow, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });
      gsap.from(secondRow, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        }
      });
    },
    { scope: containerRef }
  );

  // Use effect to update progress bar widths when in view
  useEffect(() => {
    function handleShowProgressValues() {
      isInView({
        selector: ".skill-progress .progres",
        isElements: true,
        callback: (element) => {
          element.style.width = element.getAttribute("data-value");
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
  );
}
