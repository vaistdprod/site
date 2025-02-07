'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
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

    wrapper.style.backfaceVisibility = 'hidden';
    wrapper.style.transformStyle = 'preserve-3d';
    wrapper.style.willChange = 'transform';
    wrapper.style.transform = 'translate3d(0,0,0)';

    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: wrapper,
      content: wrapper.querySelector('#smooth-content'),
      smooth: 1.2,
      normalizeScroll: false,
      ignoreMobileResize: true,
      smoothTouch: false,
      renderPriority: 1,
      ease: 'power3.out'
    });

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    });

    let resizeTimer;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Refresh the smoother's measurements instead of killing it
        if (smoother && smoother.refresh) {
          smoother.refresh();
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      smoother.kill();
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
