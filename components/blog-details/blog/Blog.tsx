'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogContent from './BlogContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function generateShareUrl(platform, post) {
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

export default function Blog({ post, latestPosts }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const containerRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements['search-post'].value;
    router.push(`/blog?search=${encodeURIComponent(query)}`);
  };

  useGSAP(
    (context) => {
      if (!containerRef.current) return;
      const mainContent = context.selector('.main-post, .comments-form');
      gsap.from(mainContent, {
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
    },
    { scope: containerRef }
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
