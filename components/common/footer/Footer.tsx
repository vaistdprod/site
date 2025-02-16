'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FooterContent from './FooterContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SubscribeResponse {
  success: boolean;
  message?: string;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [msg, setMsg] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      setMsg("Bez souhlasu vám nemůžeme zasílat newsletter.");
      return;
    }

    if (!email.includes("@")) {
      setMsg("Zadejte platný email.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data: SubscribeResponse = await response.json();
      if (data.success) {
        setMsg("Potvrďte prosím přihlášení v emailu.");
      } else {
        setMsg(data.message || "Nastala chyba, zkuste to prosím znovu.");
      }
    } catch (error) {
      setMsg(`Chyba serveru: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      columns: '.row > [class*="col-"]'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    tl.from(elements.columns, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <FooterContent
        email={email}
        agreed={agreed}
        msg={msg}
        handleSubscribe={handleSubscribe}
        setEmail={setEmail}
        setAgreed={setAgreed}
      />
    </div>
  );
}