'use client';
import React, { useRef } from 'react';
import Head from 'next/head';
import faqData from '@/data/faqData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function FAQS() {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const secHead = context.selector('.sec-head');
    const accordionItems = context.selector('.accordion .item');

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
      .from(secHead, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(
        accordionItems,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        },
        '-=0.5'
      );
  }, { scope: containerRef });

  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section ref={containerRef} className="page-faqs section-padding pb-0 relative">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-10">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">Nejčastější dotazy</h6>
                  <h3>
                    Zajímá vás víc? Projděte si naši sekci často kladených otázek.
                  </h3>
                </div>
                <div className="accordion bord">
                  {faqData.map((item, idx) => (
                    <div
                      className={`item ${idx === 0 ? 'active' : ''} fadeInUp`}
                      key={idx}
                    >
                      <div onClick={openAccordion} className="title">
                        <h6>{item.question}</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div
                        className={`accordion-info ${idx === 0 ? 'active' : ''}`}
                        style={{ maxHeight: idx === 0 ? '300px' : '0px' }}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQS;