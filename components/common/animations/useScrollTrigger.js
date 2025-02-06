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
      if (typeof window !== 'undefined') {
        ScrollTrigger.refresh(true);
      }
    }),
    []
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Ensure GSAP is registered
    gsap.registerPlugin(ScrollTrigger);

    // Force GPU acceleration on scroll container
    const scrollContainer = document.querySelector('#smooth-wrapper');
    if (scrollContainer instanceof Element) {
      scrollContainer.style.transform = 'translate3d(0,0,0)';
      scrollContainer.style.backfaceVisibility = 'hidden';
      scrollContainer.style.perspective = '1000px';
      scrollContainer.style.willChange = 'transform';
    }

    // Configure ScrollTrigger defaults
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial refresh with RAF and safety check
    const initializeScrollTrigger = () => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    };

    if (document.readyState === 'complete') {
      initializeScrollTrigger();
    } else {
      window.addEventListener('load', initializeScrollTrigger);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', initializeScrollTrigger);
      
      if (scrollContainer instanceof Element) {
        scrollContainer.style.removeProperty('transform');
        scrollContainer.style.removeProperty('backface-visibility');
        scrollContainer.style.removeProperty('perspective');
        scrollContainer.style.removeProperty('will-change');
      }
    };
  }, [handleResize]);
};