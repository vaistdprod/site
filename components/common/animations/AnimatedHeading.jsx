'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollTrigger } from './useScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedHeading = ({ 
  children, 
  tag = 'h2',
  className = '',
  delay = 0.2,
  y = 50,
  duration = 1.2,
  ease = 'power3.out',
  threshold = 0.25
}) => {
  const headingRef = useRef(null);
  const Component = tag;
  const animationRef = useRef(null);
  const triggerRef = useRef(null);
  
  useScrollTrigger();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = headingRef.current;
      if (!heading) return;

      heading.style.transform = 'translate3d(0,0,0)';
      heading.style.backfaceVisibility = 'hidden';
      heading.style.willChange = 'transform, opacity';

      gsap.set(heading, { 
        opacity: 0,
        y: y,
        force3D: true,
        rotationZ: 0.01,
      });

      triggerRef.current = ScrollTrigger.create({
        trigger: heading,
        start: `top bottom-=${threshold * 100}%`,
        end: 'top center',
        onEnter: () => {
          if (animationRef.current) animationRef.current.kill();
          
          animationRef.current = gsap.to(heading, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: ease,
            force3D: true,
            overwrite: true,
            onComplete: () => {
              heading.style.willChange = 'auto';
            }
          });
        },
        onLeaveBack: () => {
          if (animationRef.current) animationRef.current.kill();
          
          animationRef.current = gsap.to(heading, {
            opacity: 0,
            y: y,
            duration: duration * 0.5,
            ease: "power2.in",
            force3D: true,
            overwrite: true,
            onStart: () => {
              heading.style.willChange = 'transform, opacity';
            }
          });
        },
        onRefresh: self => {
          // Handle refresh/resize
          if (self.progress === 0 && !self.isActive) {
            gsap.set(heading, { opacity: 0, y: y });
          }
        }
      });

      return () => {
        if (triggerRef.current) triggerRef.current.kill();
        if (animationRef.current) animationRef.current.kill();
      };
    });

    return () => ctx.revert();
  }, [delay, y, duration, ease, threshold]);

  return (
    <Component 
      ref={headingRef}
      className={className}
      style={{
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedHeading;
