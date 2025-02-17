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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      leftCol: '.col-lg-6 .img',
      rightCol: '.col-lg-6 .accordion',
      accordionItems: '.accordion .item'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(elements.leftCol, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(elements.rightCol, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5')
    .from(elements.accordionItems, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  const openAccordion = (index: number) => {
    if (!containerRef.current) return;

    const accordionInfos = containerRef.current.querySelectorAll<HTMLElement>('.accordion-info');
    const accordionItems = containerRef.current.querySelectorAll<HTMLElement>('.accordion .item');
    
    // Reset all accordions
    accordionInfos.forEach((element, i) => {
      element.style.maxHeight = '0';
      accordionItems[i]?.classList.remove('active');
    });

    // Activate clicked accordion
    const content = accordionInfos[index];
    const parent = accordionItems[index];
    
    if (parent && content) {
      parent.classList.add('active');
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  };

  return (
    <div ref={containerRef}>
      <FaqContent onAccordionClick={openAccordion} />
    </div>
  );
}
