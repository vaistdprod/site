// /components/common/Loader.jsx
'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Make sure the loader exists in the DOM
    const loader = document.querySelector('.loader-wrap');
    if (!loader) return;

    const svg = loader.querySelector('svg');
    const tl = gsap.timeline({
      onComplete: () => {
        // Once the animation is complete, hide the loader
        setVisible(false);
      }
    });

    // Define your GSAP animations
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    tl.to('.loader-wrap-heading .load-text', {
      delay: 1.2,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.4,
      attr: { d: curve },
      ease: 'power2.easeIn',
    })
      .to(svg, {
        duration: 0.4,
        attr: { d: flat },
        ease: 'power2.easeOut',
      })
      .to(loader, { y: -1500, duration: 0.4 })
      .to(loader, { zIndex: -1, display: 'none', duration: 0.1 });
  }, []);

  if (!visible) return null;

  return (
    <div
      className="loader-wrap"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: '#fff'
      }}
    >
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="loader-wrap-heading">
        <div className="load-text">
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
