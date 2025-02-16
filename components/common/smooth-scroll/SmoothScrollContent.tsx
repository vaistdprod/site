import React from 'react';

export default function SmoothScrollContent({ children }) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
