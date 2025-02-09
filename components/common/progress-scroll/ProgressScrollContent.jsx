import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ProgressScrollContent() {
  return (
    <div className="progress-wrap fixed block cursor-pointer">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path className="progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="progress-icon absolute">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}
