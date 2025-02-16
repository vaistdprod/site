'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SmoothScrollContent from './SmoothScrollContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const isTouchDevice =
                'ontouchstart' in window || navigator.maxTouchPoints > 0;
            if (isTouchDevice) {
                return;
            }

            const wrapper = wrapperRef.current;
            if (!wrapper) {
                return;
            }

            wrapper.style.backfaceVisibility = 'hidden';
            wrapper.style.transformStyle = 'preserve-3d';
            wrapper.style.willChange = 'transform';
            wrapper.style.transform = 'translate3d(0,0,0)';

            ScrollTrigger.config({
                limitCallbacks: true,
                ignoreMobileResize: true,
                autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
            });

            let resizeTimer: number;
            function handleResize() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(ScrollTrigger.refresh, 150) as unknown as number;
            }

            window.addEventListener('resize', handleResize, { passive: true });

            return () => {
                clearTimeout(resizeTimer);
                window.removeEventListener('resize', handleResize);
                ScrollTrigger.killAll();
            };
        },
        { scope: wrapperRef }
    );

    return (
        <div id="smooth-wrapper" ref={wrapperRef}>
            <div id="smooth-content">{children}</div>
        </div>
    );
}
