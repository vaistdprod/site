'use client';

import React, { useEffect, useRef } from "react";
import RollingTextContent from "./RollingTextContent";

interface RollingTextProps {
  text?: string;
}

const RollingText: React.FC<RollingTextProps> = ({ text = "home" }) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.innerHTML = "";

    const fragment = document.createDocumentFragment();
    const textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of text) {
      const span = document.createElement("span");
      span.classList.add("letter");
      span.innerText = letter.trim() === "" ? "\xa0" : letter;
      textContainer.appendChild(span);
    }

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

  return <span className="rolling-text" ref={elementRef}></span>;
};

export default RollingText;