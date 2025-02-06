'use client';

import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Optimized debounce with RAF
function rafDebounce(callback) {
  let requestId = null;
  let lastArgs = null;

  const later = () => {
    requestId = null;
    if (lastArgs) {
      callback(...lastArgs);
      lastArgs = null;
    }
  };

  return (...args) => {
    lastArgs = args;
    if (!requestId) {
      requestId = requestAnimationFrame(later);
    }
  };
}

export const useScrollTrigger = () => {
  const handleResize = useCallback(
    rafDebounce(() => {
      ScrollTrigger.refresh(true);
    }),
    []
  );

  useEffect(() => {
    // Force GPU acceleration on scroll container
    const scrollContainer = document.querySelector('#smooth-wrapper');
    if (scrollContainer) {
      scrollContainer.style.transform = 'translate3d(0,0,0)';
      scrollContainer.style.backfaceVisibility = 'hidden';
      scrollContainer.style.perspective = '1000px';
      scrollContainer.style.willChange = 'transform';
    }

    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial refresh with RAF
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollContainer) {
        scrollContainer.style.removeProperty('transform');
        scrollContainer.style.removeProperty('backface-visibility');
        scrollContainer.style.removeProperty('perspective');
        scrollContainer.style.removeProperty('will-change');
      }
    };
  }, [handleResize]);
};