import React from 'react';

export default function RollingTextContent({ text = "home" }) {
  return (
    <span className="rolling-text">
      {text.split('').map((letter, index) => (
        <span key={index} className="letter">
          {letter.trim() === "" ? "\xa0" : letter}
        </span>
      ))}
    </span>
  );
}
