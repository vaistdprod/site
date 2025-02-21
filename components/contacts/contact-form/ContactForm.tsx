'use client';

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContactFormContent from './ContactFormContent';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  jmeno: string;
  email: string;
  potrebuji: string[];
  zprava: string;
}

interface FormErrors {
  jmeno?: string;
  email?: string;
  zprava?: string;
}

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    jmeno: '',
    email: '',
    potrebuji: [],
    zprava: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      leftCol: '.col-lg-4',
      rightCol: '.col-lg-7',
      formGroups: '.form-group'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(elements.leftCol, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from(elements.rightCol, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.5')
    .from(elements.formGroups, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && 'checked' in e.target) {
      const { checked } = e.target as HTMLInputElement;
      let updatedPotrebuji = [...formData.potrebuji];
      if (checked) {
        updatedPotrebuji.push(value);
      } else {
        updatedPotrebuji = updatedPotrebuji.filter((item) => item !== value);
      }
      setFormData({ ...formData, potrebuji: updatedPotrebuji });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.jmeno || formData.jmeno.length < 2) {
      newErrors.jmeno = 'Jméno musí mít alespoň 2 znaky.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Zadejte platnou emailovou adresu.';
    }
    if (formData.zprava.length < 10) {
      newErrors.zprava = 'Zpráva musí mít alespoň 10 znaků.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!validateForm()) {
      return;
    }
    setStatus('Odesílání...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Zpráva úspěšně odeslána!');
        setFormData({
          jmeno: '',
          email: '',
          potrebuji: [],
          zprava: '',
        });
      } else {
        setStatus(data.message || 'Nepodařilo se odeslat zprávu.');
      }
    } catch (error) {
      console.error('Chyba:', error);
      setStatus('Došlo k chybě při odesílání zprávy.');
    }
  };

  return (
    <div ref={containerRef}>
      <ContactFormContent
        formData={formData}
        status={status || ""}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}