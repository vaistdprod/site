'use client';
import React, { useLayoutEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services({ services }) {
  useLayoutEffect(() => {
    // Select the smooth scroll container
    const smoothContainer = document.querySelector('#smooth-content');
    
    // Make sure the container exists
    if (smoothContainer) {
      // Set up the scroller proxy for ScrollTrigger
      ScrollTrigger.scrollerProxy(smoothContainer, {
        scrollTop(value) {
          // When setting the scroll position, update the container’s scrollTop
          if (arguments.length) {
            smoothContainer.scrollTop = value;
          }
          return smoothContainer.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // Pinning might need to be set to "transform" if your smooth scroll applies transforms.
        pinType: smoothContainer.style.transform ? "transform" : "fixed",
      });
    }
    
    // Refresh ScrollTrigger after setting up the proxy
    ScrollTrigger.refresh();

    // Now, set up the animation on the h3
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animated-h3", // target the heading
        { rotationY: -90, opacity: 0 },
        {
          rotationY: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animated-h3",
            start: "top 80%",
            toggleActions: "play none none none",
            scroller: "#smooth-content", // tell it which container to track
            markers: true, // debug markers—remove when done
          },
        }
      );
    });
    
    // Clean up when the component unmounts
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="services-class relative">
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

      <div className="container section-padding bord-bottom-grd relative pt-0">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="sub-title main-color mb-5">Specializace</span>
              <h3 className="animated-h3 fw-600 fz-50 text-u">
                Vybrané <span className="fw-200">služby</span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <Link href="/nase-sluzby" className="btn btn-sm btn-bord radius-30">
                <span>Zobrazit všechny</span>
              </Link>
              <Link href="/nase-sluzby">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row mb-40">
          {Object.entries(services).map(([serviceKey, service]) => (
            <div key={serviceKey} className="col-lg-4">
              <div className="item mb-30">
                <div
                  className="size-60 opacity-7 mb-40"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
                <h5>{service.title}</h5>
                <div className="text mt-40">
                  <div className="mb-10">
                    {service.tags &&
                      service.tags.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                  </div>
                  <p>{service.desc}</p>
                </div>
                <Link
                  href={`/nase-sluzby${service.link}`}
                  className="mt-40"
                  aria-label={`Více o ${service.title}`}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/blur1-0J2DJ0INNrXDLBO6XFZu6DKiOqorlZ.png"
          alt=""
          width={692}
          height={537}
        />
      </div>
    </section>
  );
}

export default Services;
