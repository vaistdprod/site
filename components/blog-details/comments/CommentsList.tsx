'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import CommentsListContent from './CommentsListContent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Comment {
  id: number;
  name: string;
  email: string;
  message: string;
  slug: string;
  date: string;
}

export default function CommentsList({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

    const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
      const data = await res.json();
      if (res.ok) {
        setComments(data.comments);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Nepovedlo se načíst komentáře:', error);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useGSAP(
    (context) => {
      if (!containerRef.current) return;
      const commentItems = context.selector('.comment-item');
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }).from(commentItems, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  if (loading) {
    return <p>Načítám komentáře...</p>;
  }

  if (comments.length === 0) {
    return <p className="mt-20">Buďte první, kdo přidá komentář.</p>;
  }

  return (
    <div ref={containerRef}>
      <CommentsListContent comments={comments} />
    </div>
  );
}
