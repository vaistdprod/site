'use client';

import React, { useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import faqData from '@/data/faqData.json';
import FAQSContent from './FAQSContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function FAQS() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const secHead = context.selector?.('.sec-head');
      const accordionItems = context.selector?.('.accordion .item');

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(secHead, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from(
          accordionItems,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

    function openAccordion(event: React.MouseEvent<HTMLDivElement>) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      if (element instanceof HTMLElement) {
        element.style.maxHeight = '0';
      }
      if (element.parentElement) {
        element.parentElement.classList.remove('active');
      }
    });

    const currentTarget = event.currentTarget as HTMLDivElement;
    const parentElement = currentTarget.parentElement;
    const nextElementSibling = currentTarget.nextElementSibling as HTMLElement;

    if (parentElement) {
      parentElement.classList.add('active');
    }
    if (nextElementSibling) {
      nextElementSibling.style.maxHeight = '300px';
      nextElementSibling.classList.add('active');
    }
  }

    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item: FaqItem) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <div ref={containerRef}>
        <FAQSContent onAccordionClick={openAccordion} />
      </div>
    </>
  );
}
