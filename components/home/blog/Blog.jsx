// components/home/Blog.jsx
'use client';

import React, { useRef } from 'react';
import BlogContent from './BlogContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Blog({ posts = [] }) {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const secHead = context.selector('.sec-head');
      const items = context.selector('.item');
      gsap.from(secHead, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
      gsap.from(items, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  if (!posts.length) return null;

  return (
    <div ref={containerRef}>
      <BlogContent posts={posts} />
    </div>
  );
}
