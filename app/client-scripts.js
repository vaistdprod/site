"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function ClientScripts() {
  const [isNonTouch, setIsNonTouch] = useState(false);

  useEffect(() => {
    const hasTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsNonTouch(!hasTouch);
  }, []);

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/e630efef3e.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
      {isNonTouch && (
        <>
          <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" />
          <Script src="/assets/js/scripts.js" strategy="afterInteractive" />
        </>
      )}
    </>
  );
}