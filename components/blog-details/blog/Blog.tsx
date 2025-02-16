'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogContent from './BlogContent';
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

export default function Blog({
  post,
  latestPosts,
}: {
  post: Post;
  latestPosts: Post[];
}) {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const containerRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Publikuji...');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, slug: post.slug }),
      });
      if (res.ok) {
        setStatus('Komentář byl úspěšně publikován.');
        setFormData({ name: '', email: '', message: '' });
        router.refresh();
      } else {
        const error = await res.json();
        setStatus(`Error: ${error.error}`);
      }
    } catch (error) {
      setStatus('Nastala neočekávaná chyba.');
    }
  };

 const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   const query = (e.currentTarget.elements.namedItem(
     'search-post'
   ) as HTMLInputElement).value;
   router.push(`/blog?search=${encodeURIComponent(query)}`);
 };

    useGSAP(
    (context) => {
      if (!containerRef.current) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          onEnter: () => {
            if (containerRef.current) {
              const mainContent = containerRef.current.querySelectorAll('.main-post, .comments-form');
              if (mainContent) {
                gsap.from(mainContent, {
                  opacity: 0,
                  y: 50,
                  duration: 0.8,
                  ease: 'power3.out',
                  stagger: 0.2,
                });
              }
            }
          },
        },
      });
    },
    {}
);

  return (
    <section ref={containerRef} className="blog section-padding">
      <BlogContent
        post={post}
        latestPosts={latestPosts}
        formData={formData}
        status={status}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        generateShareUrl={generateShareUrl}
        handleSearch={handleSearch}
      />
    </section>
  );
}
