'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothScrollProvider = ({ children }) => {
  const wrapperRef = useRef(null);

  useGSAP((context) => {
    const isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    if (isTouchDevice) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // These style tweaks stay to keep things smooth-ish with GSAP animations
    wrapper.style.backfaceVisibility = 'hidden';
    wrapper.style.transformStyle = 'preserve-3d';
    wrapper.style.willChange = 'transform';
    wrapper.style.transform = 'translate3d(0,0,0)';

    // Configure ScrollTrigger as usual
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    });

    let resizeTimer;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Refresh ScrollTrigger instead of a smoother instance
        ScrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.killAll();
    };
  }, { scope: wrapperRef });

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;
