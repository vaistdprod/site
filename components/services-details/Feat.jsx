'use client';
import React, { useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Feat({ serviceData }) {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const featItems = context.selector('.col-lg-3');
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }).from(featItems, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="feat relative">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="flex align-center mb-30">
            <h2 className="fw-600 fz-70 text-u">
              <span>Proces <span className="fw-200">spolupráce</span></span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/kontakty" className="btn btn-sm btn-bord radius-30">
                <span>Kontaktujte nás</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
          <h6 className="sub-title main-color flex align-center">
            <span>Akční kroky</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {serviceData.feat?.map((item, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="radius-15 md-mb50">
                <h3 className="mb-30 p-color stroke-30">{item.step}.</h3>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feat;
