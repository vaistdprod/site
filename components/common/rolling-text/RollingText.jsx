// components/common/RollingText.jsx
'use client';

import React, { useEffect, useRef } from "react";
import RollingTextContent from "./RollingTextContent";

const RollingText = ({ text = "home" }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Clear the static fallback content
    element.innerHTML = "";

    // Create animated content using a DocumentFragment
    const fragment = document.createDocumentFragment();
    const textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of text) {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      textContainer.appendChild(span);
    }

    // Clone the container for the double animation effect
    fragment.appendChild(textContainer);
    fragment.appendChild(textContainer.cloneNode(true));

    element.appendChild(fragment);

    const handleMouseOver = () => {
      element.classList.remove("play");
    };
    element.addEventListener("mouseover", handleMouseOver);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
    };
  }, [text]);

  // Render an empty span with a ref. Once hydrated, the useEffect replaces its content.
  return <span className="rolling-text" ref={elementRef}></span>;
};

export default RollingText;
