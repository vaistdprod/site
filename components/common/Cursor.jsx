"use client";
import { useState, useEffect } from "react";

export default function Cursor() {
  const [shouldRenderCursor, setShouldRenderCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;
    setShouldRenderCursor(true);
  }, []);

  useEffect(() => {
    if (!shouldRenderCursor) return;
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const animateHover = (e) => {
      const hoverAnim = e.currentTarget.querySelector(".hover-anim");
      if (!hoverAnim) return;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: w, offsetHeight: h } = e.currentTarget;
      const move = 25;
      const xMove = (x / w) * (move * 2) - move;
      const yMove = (y / h) * (move * 2) - move;
      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === "mouseleave") hoverAnim.style.transform = "";
    };

    const updateCursorPos = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const hoverElements = document.querySelectorAll(".hover-this");
    hoverElements.forEach((el) => {
      el.addEventListener("mousemove", animateHover);
      el.addEventListener("mouseleave", animateHover);
    });
    window.addEventListener("mousemove", updateCursorPos);

    const interactiveElements = document.querySelectorAll("a, .cursor-pointer");
    const handleInteractiveMouseMove = () => {
      cursor.classList.add("cursor-active");
    };
    const handleInteractiveMouseLeave = () => {
      cursor.classList.remove("cursor-active");
    };
    interactiveElements.forEach((el) => {
      el.addEventListener("mousemove", handleInteractiveMouseMove);
      el.addEventListener("mouseleave", handleInteractiveMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mousemove", animateHover);
        el.removeEventListener("mouseleave", animateHover);
      });
      window.removeEventListener("mousemove", updateCursorPos);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mousemove", handleInteractiveMouseMove);
        el.removeEventListener("mouseleave", handleInteractiveMouseLeave);
      });
    };
  }, [shouldRenderCursor]);

  useEffect(() => {
    if (!shouldRenderCursor) return;
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [shouldRenderCursor]);

  if (!shouldRenderCursor) return null;

  const radialGradientStyle = {
    pointerEvents: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 6,
    transition: "opacity 300ms",
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(11, 96%, 46%, 0.1), transparent 80%)`
  };

  return (
    <>
      <div className="cursor"></div>
      <div className="radial-cursor" style={radialGradientStyle}></div>
    </>
  );
}