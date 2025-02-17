'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const selector = gsap.utils.selector(containerRef.current);
    const iframe = selector('iframe');

    gsap.from(iframe, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5859714926644!2d18.2843556!3d49.8354972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e33ea9907c09%3A0x82d3b7b6dcc9350!2zVHLFvm7DrSAyNzMvMywgNzI1IDI2IE9zdHJhdmE!5e0!3m2!1scs!2scz!4v1705936729071!5m2!1scs!2scz"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
