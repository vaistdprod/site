// components/blog/CommentsListContent.jsx
import React from 'react';
import Image from 'next/image';

export default function CommentsListContent({ comments }) {
  return (
    <div className="comments-list mt-40">
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
