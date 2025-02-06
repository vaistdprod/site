'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Cursor() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const radialRef = useRef(null);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!hasTouch) {
      setShouldRender(true);
    }
  }, []);

  useGSAP(() => {
    if (!shouldRender) return;
    const cursor = cursorRef.current;
    const radial = radialRef.current;
    if (!cursor || !radial) return;

    const setCursorX = gsap.quickSetter(cursor, "x", "px");
    const setCursorY = gsap.quickSetter(cursor, "y", "px");

    const updateRadial = (x, y) => {
      radial.style.background = `radial-gradient(600px at ${x}px ${y}px, hsla(11, 96%, 46%, 0.15), transparent 100%)`;
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorX(clientX - 5);
      setCursorY(clientY - 5);
      updateRadial(clientX, clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll("a, .cursor-pointer");
    const addActive = () => {
      gsap.to(cursor, { scale: 8, opacity: 0.1, duration: 0.2, ease: "power3.out" });
      cursor.classList.add("cursor-active");
    };
    const removeActive = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.2, ease: "power3.out" });
      cursor.classList.remove("cursor-active");
    };
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    const hoverElements = document.querySelectorAll(".hover-this");
    const handleHover = (e) => {
      const hoverAnim = e.currentTarget.querySelector(".hover-anim");
      if (!hoverAnim) return;
      const rect = e.currentTarget.getBoundingClientRect();
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
    const resetHover = (e) => {
      const hoverAnim = e.currentTarget.querySelector(".hover-anim");
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
      el.addEventListener("mousemove", handleHover);
      el.addEventListener("mouseleave", resetHover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addActive);
        el.removeEventListener("mouseleave", removeActive);
      });
      hoverElements.forEach((el) => {
        el.removeEventListener("mousemove", handleHover);
        el.removeEventListener("mouseleave", resetHover);
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
      ></div>
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
      ></div>
    </div>
  );
}
