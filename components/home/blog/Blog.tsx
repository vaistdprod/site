'use client';

import React, { useRef } from 'react';
import BlogContent from './BlogContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Post } from '@/lib/posts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  posts: Post[];
}

export default function Blog({ posts }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const secHead = context?.selector?.('.sec-head') as HTMLDivElement | null;
      const items = context?.selector?.('.item') as HTMLDivElement[] | null;
      if (secHead) {
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
      }
      if (items) {
        gsap.from(items, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef?.current,
            start: 'top 80%',
          },
        });
      }
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
