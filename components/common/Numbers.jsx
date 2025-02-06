'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Numbers() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const items = context.selector('.item');
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="numbers-crev relative section-padding">
      <div className="container">
        <div className="row lg-marg justify-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">100%</h3>
              </div>
              <h6 className="p-color sub-title">garance spokojenosti</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">40+</h3>
              </div>
              <h6 className="p-color sub-title">vyhotovených projektů</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <div className="o-hidden">
                <h3 className="stroke">24x7</h3>
              </div>
              <h6 className="p-color sub-title">podpora zákazníků</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
