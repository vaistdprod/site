// components/home/MapContent.jsx
import React from "react";

export default function MapContent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.453437021265!2d18.2884966771555!3d49.83393703156138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e329bb264f3b%3A0x561d75590cd203db!2sTD%20Productions!5e0!3m2!1sen!2scz!4v1738558880390!5m2!1sen!2scz"
      width="100%"
      height="600"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
