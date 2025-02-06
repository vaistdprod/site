'use client';
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Intro({ serviceData }) {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const textContent = context.selector('.row.lg-marg > .col-lg-8');
    const numbers = context.selector('.numbers');
    const imgBox = context.selector('.col-lg-4 .img-full');
    
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })
      .from(textContent, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(numbers, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      }, '-=0.5')
      .from(imgBox, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8');
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">
                    {serviceData.title} s TD Productions
                  </h6>
                  <h3 className="mb-30">
                    Věříme<br />v prvotřídní
                    <span className="block fw-300">služby pro každého.</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">{serviceData.desc}</p>
                  <div className="mt-30">
                    <ul className="rest dot-list">
                      {serviceData.bullets?.map((bullet, idx) => (
                        <li className="mb-10" key={idx}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="numbers mt-80 md-mb50">
              <div className="row lg-marg">
                {serviceData.stats?.map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="item bord-thin-top pt-30 flex align-end mt-20 sm-mb30">
                      <div>
                        <h3 className="fw-300 mb-10">{item.value}</h3>
                        <h6 className="p-color sub-title">{item.label}</h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-60">
                          <Image
                            src="/assets/imgs/logo-light-stroke.svg"
                            alt="Logo TD Productions"
                            width={60}
                            height={46}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="img-full h-100 fit-img o-hidden relative">
              <Image
                src={serviceData.img}
                alt={serviceData.title}
                fill
                className="object-cover object-center full-size"
                sizes="(max-width: 575px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 67vw, (max-width: 1399px) 25vw, 30vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
