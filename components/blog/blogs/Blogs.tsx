'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogsContent from './BlogsContent';
import { Post } from '@/lib/posts';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function generateShareUrl(platform: string, post: Post) {
  const currentUrl = `https://tdprod.cz/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);
  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    default:
      return '#';
  }
}

interface BlogsProps {
  posts: Post[];
  tagCounts: { [key: string]: number };
  uniqueTags: string[];
}

export default function Blogs({ posts, tagCounts, uniqueTags }: BlogsProps) {
  const router = useRouter();
  const containerRef = useRef(null);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.currentTarget.elements.namedItem(
      'search-post'
    ) as HTMLInputElement).value;
    router.push(`/blog?search=${encodeURIComponent(query)}`);
  };

  useGSAP(
    (context) => {
      const blogItems = context.selector('.item');
      const widgets = context.selector('.widget');
      gsap.from(blogItems, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
      gsap.from(widgets, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="blog-main section-padding">
      <BlogsContent
        posts={posts}
        tagCounts={tagCounts}
        uniqueTags={uniqueTags}
        onSearchSubmit={onSearchSubmit}
        generateShareUrl={generateShareUrl}
      />
    </section>
  );
}
