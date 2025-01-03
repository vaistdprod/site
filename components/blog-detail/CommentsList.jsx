'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function CommentsList({ slug }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
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
  };

  useEffect(() => {
    fetchComments();
  }, [slug]);

  if (loading) {
    return <p>Načítám komentáře...</p>;
  }

  if (comments.length === 0) {
    return <p>Buďte první, kdo přidá komentář.</p>;
  }

  return (
    <div className="comments-list mt-40">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item mb-30">
          <div className="comment-header d-flex align-items-center mb-10">
            <div className="comment-avatar">
              <Image
                src="/assets/imgs/user-placeholder.svg"
                alt={comment.name}
                width={40}
                height={40}
                className="rounded-circle"
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