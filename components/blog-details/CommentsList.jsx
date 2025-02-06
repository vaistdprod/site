'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function CommentsList({ slug }) {
  const [comments, setComments] = useState([]);
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
    <div ref={containerRef} className="comments-list mt-40">
      {comments.map((comment) => (
        <div key={comment._id} className="comment-item mb-30">
          <div className="comment-header flex align-center mb-10">
            <div className="comment-avatar icon-img-40">
              <Image
                src="/assets/imgs/user-placeholder.svg"
                alt={comment.name}
                width={40}
                height={40}
                className="circle"
              />
            </div>
            <div className="comment-meta ml-10">
              <h6 className="comment-author fw-600">{comment.name}</h6>
              <span className="comment-date">
                {new Date(comment.date).toLocaleDateString('cs-CZ', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
