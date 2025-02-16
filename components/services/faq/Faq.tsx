'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FaqContent from "./FaqContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Faq() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const leftCol = context.selector(".col-lg-6 .img");
      const rightCol = context.selector(".col-lg-6 .accordion");
      const accordionItems = context.selector(".accordion .item");

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
        .from(leftCol, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          rightCol,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          accordionItems,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.5"
        );
    },
    { scope: containerRef }
  );

  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <div ref={containerRef}>
      <FaqContent onAccordionClick={openAccordion} />
    </div>
  );
}
