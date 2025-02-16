'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeaderContent from './HeaderContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeaderProps {
  children: React.ReactNode;
  delay?: number;
  overlayDark?: number;
  className?: string;
  bgContent?: React.ReactNode;
}

export default function Header({
  children,
  delay = 2,
  overlayDark = 5,
  className,
  bgContent,
}: HeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;

    const elements = {
      header: headerRef.current,
      container: '.container'
    };

    const tl = gsap.timeline();

    tl.fromTo(
      elements.header,
      { y: 200 },
      { 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        delay
      }
    ).fromTo(
      elements.container,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out' 
      },
      '-=0.2'
    );

    return () => {
      tl.kill();
    };
  }, { scope: headerRef });

  return (
    <div ref={headerRef}>
      <HeaderContent 
        className={className} 
        overlayDark={overlayDark} 
        bgContent={bgContent}
      >
        {children}
      </HeaderContent>
    </div>
  );
}