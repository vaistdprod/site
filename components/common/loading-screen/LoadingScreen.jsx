// components/common/LoadingScreen.jsx
'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import LoadingScreenContent from './LoadingScreenContent';

export default function LoadingScreen() {
  useEffect(() => {
    const svg = document.getElementById('svg');
    if (!svg) return;
    
    const tl = gsap.timeline();
    const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
    const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

    tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
      delay: 1.2,
      y: -100,
      opacity: 0,
    });
    
    tl.to(svg, {
      duration: 0.4,
      attr: { d: curve },
      ease: 'power2.easeIn',
    }).to(svg, {
      duration: 0.4,
      attr: { d: flat },
      ease: 'power2.easeOut',
    });
    
    tl.to('.loader-wrap', { y: -1500 });
    tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
  }, []);

  return <LoadingScreenContent />;
}
