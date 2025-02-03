// /components/common/AnimatedLoaderWrapper.jsx
'use client';

import { useEffect } from 'react';

export default function AnimatedLoaderWrapper() {
  useEffect(() => {
    // Run the animation after a short delay to ensure hydration is complete
    const timeout = setTimeout(() => {
      const loader = document.querySelector('.loader-wrap');
      if (loader && window.gsap) {
        // Grab the SVG element from within the loader
        const svg = loader.querySelector('svg');
        const tl = window.gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        // Animate the text exit
        tl.to('.loader-wrap-heading .load-text', {
          delay: 1.2,
          y: -100,
          opacity: 0,
        });
        // Animate the SVG path change
        tl.to(svg, {
          duration: 0.4,
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.4,
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        // Animate the loader exit
        tl.to(loader, { y: -1500, duration: 0.4 });
        tl.to(loader, { zIndex: -1, display: 'none', duration: 0.1 });
      }
    }, 100); // Adjust the delay if needed

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render any visible markup
}
