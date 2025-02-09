// components/common/LoadingScreenContent.jsx
import React from 'react';

export default function LoadingScreenContent() {
  return (
    <div className="loader-wrap fixed w-full vh-100 flex o-hidden align-center justify-center">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text uppercase fw-200">
          <span>N</span>
          <span>a</span>
          <span>č</span>
          <span>í</span>
          <span>t</span>
          <span>á</span>
          <span>m</span>
        </div>
      </div>
    </div>
  );
}
