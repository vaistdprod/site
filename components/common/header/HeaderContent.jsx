// components/common/HeaderContent.jsx
import React from 'react';

export default function HeaderContent({ children, className, overlayDark, bgContent }) {
  return (
    <div className={className} data-overlay-dark={overlayDark}>
      {bgContent}
      <div className="container relative z-7">
        {children}
      </div>
    </div>
  );
}
