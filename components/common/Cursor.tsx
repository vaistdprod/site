'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CursorElements {
  cursor: HTMLDivElement;
  radial: HTMLDivElement;
}

export default function Cursor() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!hasTouch) {
      setShouldRender(true);
    }
  }, []);

  useGSAP(() => {
    if (!shouldRender || !cursorRef.current || !radialRef.current) return;

    const elements: CursorElements = {
      cursor: cursorRef.current,
      radial: radialRef.current
    };

    const setCursorX = gsap.quickSetter(elements.cursor, "x", "px");
    const setCursorY = gsap.quickSetter(elements.cursor, "y", "px");

    const updateRadial = (x: number, y: number) => {
      elements.radial.style.background = `radial-gradient(600px at ${x}px ${y}px, hsla(11, 96%, 46%, 0.15), transparent 100%)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorX(clientX - 5);
      setCursorY(clientY - 5);
      updateRadial(clientX, clientY);
    };

    const interactiveElements = document.querySelectorAll<HTMLElement>("a, .cursor-pointer");
    
    const addActive = () => {
      gsap.to(elements.cursor, {
        scale: 8,
        opacity: 0.1,
        duration: 0.2,
        ease: "power3.out"
      });
      elements.cursor.classList.add("cursor-active");
    };

    const removeActive = () => {
      gsap.to(elements.cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power3.out"
      });
      elements.cursor.classList.remove("cursor-active");
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    const hoverElements = document.querySelectorAll<HTMLElement>(".hover-this");
    
    const handleHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const hoverAnim = target.querySelector<HTMLElement>(".hover-anim");
      if (!hoverAnim) return;

      const rect = target.getBoundingClientRect();
      const move = 25;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xMove = (x / rect.width) * (move * 2) - move;
      const yMove = (y / rect.height) * (move * 2) - move;

      gsap.to(hoverAnim, {
        x: xMove,
        y: yMove,
        duration: 0.3,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const resetHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const hoverAnim = target.querySelector<HTMLElement>(".hover-anim");
      if (!hoverAnim) return;

      gsap.to(hoverAnim, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
        overwrite: true,
      });
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mousemove", handleHover as EventListener);
      el.addEventListener("mouseleave", resetHover as EventListener);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
      hoverElements.forEach((el) => {
        el.removeEventListener("mousemove", handleHover as EventListener);
        el.removeEventListener("mouseleave", resetHover as EventListener);
      });
    };
  }, { dependencies: [shouldRender], scope: containerRef });

  if (!shouldRender) return null;

  return (
    <div ref={containerRef}>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      />
      <div
        ref={radialRef}
        className="radial-cursor"
        style={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          transition: "opacity 300ms",
        }}
      />
    </div>
  );
}