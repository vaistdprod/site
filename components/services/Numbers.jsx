'use client'

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Numbers() {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const secHead = context.selector(".sec-head");
    const items = context.selector(".item");

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
      .from(secHead, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        items,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.5"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="numbers section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-border mb-30">TD záruka</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  Jsme vašimi partnery od prvotního plánování projektu až po jeho finální spuštění a následnou údržbu.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row lg-marg justify-center">
          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20 md-mb30">
              <div>
                <h3 className="fw-300 mb-10">100%</h3>
                <h6 className="p-color sub-title">garance spokojenosti</h6>
              </div>
              <div className="ml-auto">
                <div className="icon-img-60">
                  <Image
                    src="/assets/imgs/logo-light-stroke.svg"
                    alt="Logo TD Productions"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20 md-mb30">
              <div>
                <h3 className="fw-300 mb-10">40+</h3>
                <h6 className="p-color sub-title">úspěšných projektů</h6>
              </div>
              <div className="ml-auto">
                <div className="icon-img-60">
                  <Image
                    src="/assets/imgs/logo-light-stroke.svg"
                    alt="Logo TD Productions"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20">
              <div>
                <h3 className="fw-300 mb-10">24/7</h3>
                <h6 className="p-color sub-title">technická podpora</h6>
              </div>
              <div className="ml-auto">
                <div className="icon-img-60">
                  <Image
                    src="/assets/imgs/logo-light-stroke.svg"
                    alt="Logo TD Productions"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
