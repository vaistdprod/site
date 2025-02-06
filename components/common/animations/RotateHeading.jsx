'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollTrigger } from './useScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const RotateHeading = ({
  children,
  tag = 'h3',
  className = '',
  delay = 0.3,
  duration = 1.2,
  perspective = 1200,
  rotationX = -45,
  y = 40,
  z = -40,
  scale = 0.95,
  threshold = 0.2
}) => {
  const headingRef = useRef(null);
  const Component = tag;
  const animationRef = useRef(null);
  const triggerRef = useRef(null);

  useScrollTrigger();

  useLayoutEffect(() => {
    const element = headingRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      // Make sure the parent element exists for perspective settings.
      if (element.parentElement) {
        gsap.set(element.parentElement, {
          perspective: perspective,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        });
      }
      gsap.set(element, {
        opacity: 0,
        rotationX: rotationX,
        y: y,
        z: z,
        scale: scale,
        transformOrigin: '50% 0%',
        transformStyle: 'preserve-3d',
        force3D: true,
        rotationZ: 0.01,
        willChange: 'transform, opacity'
      });

      // Create ScrollTrigger instance immediately.
      triggerRef.current = ScrollTrigger.create({
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        end: 'top center',
        onEnter: () => {
          if (animationRef.current) animationRef.current.kill();
          animationRef.current = gsap.to(element, {
            opacity: 1,
            rotationX: 0,
            y: 0,
            z: 0,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            force3D: true,
            overwrite: true,
            onComplete: () => {
              element.style.willChange = 'auto';
            }
          });
        },
        onLeaveBack: () => {
          if (animationRef.current) animationRef.current.kill();
          animationRef.current = gsap.to(element, {
            opacity: 0,
            rotationX: rotationX,
            y: y,
            z: z,
            scale: scale,
            duration: duration * 0.5,
            ease: "power2.in",
            force3D: true,
            overwrite: true,
            onStart: () => {
              element.style.willChange = 'transform, opacity';
            }
          });
        },
        onRefresh: self => {
          if (self.progress === 0 && !self.isActive) {
            gsap.set(element, {
              opacity: 0,
              rotationX: rotationX,
              y: y,
              z: z,
              scale: scale
            });
          }
        }
      });
    }, element);

    return () => {
      if (triggerRef.current) triggerRef.current.kill();
      if (animationRef.current) animationRef.current.kill();
      ctx.revert();
    };
  }, [delay, duration, perspective, rotationX, y, z, scale, threshold]);

  return (
    <div 
      className="rotate-heading-wrapper"
      style={{
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d'
      }}
    >
      <Component
        ref={headingRef}
        className={className}
        style={{
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </Component>
    </div>
  );
};

export default RotateHeading;
