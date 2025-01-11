"use client";
import { useState, useEffect } from "react";

export default function Cursor() {
  const [shouldRenderCursor, setShouldRenderCursor] = useState(false);

  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (hasTouch) return;
    setShouldRenderCursor(true);
  }, []);

  useEffect(() => {
    if (!shouldRenderCursor) return;

    const link = document.querySelectorAll(".hover-this");
    const cursor = document.querySelector(".cursor");

    const animateit = (e) => {
      const hoverAnim = e.currentTarget.querySelector(".hover-anim");
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: w, offsetHeight: h } = e.currentTarget;
      const move = 25;
      const xMove = (x / w) * (move * 2) - move;
      const yMove = (y / h) * (move * 2) - move;
      hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === "mouseleave") hoverAnim.style.transform = "";
    };

    const editCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    link.forEach((b) => {
      b.addEventListener("mousemove", animateit);
      b.addEventListener("mouseleave", animateit);
    });
    window.addEventListener("mousemove", editCursor);

    document.querySelectorAll("a, .cursor-pointer").forEach((el) => {
      el.addEventListener("mousemove", () => {
        cursor.classList.add("cursor-active");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-active");
      });
    });

    return () => {
      link.forEach((b) => {
        b.removeEventListener("mousemove", animateit);
        b.removeEventListener("mouseleave", animateit);
      });
      window.removeEventListener("mousemove", editCursor);
    };
  }, [shouldRenderCursor]);

  if (!shouldRenderCursor) return null;
  return <div className="cursor" />;
}