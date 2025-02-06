'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Feat() {
  const containerRef = useRef(null);

  useGSAP(
    (context) => {
      const leftCont = context.selector('.col-lg-5 .cont');
      const featH6 = context.selector('.feat-h6');
      const featH3 = context.selector('.feat-h3');
      const featParagraph = context.selector('.feat-paragraph');
      const featLink = context.selector('.btn-crev');
      const rightItems = context.selector('.col-lg-6 .item');

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
        .from(leftCont, {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
        .from(
          [featH6, featH3],
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        )
        .from(
          featParagraph,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          featLink,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .from(
          rightItems,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '-=0.5'
        );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="feat relative section-padding">
      <div className="container relative z-7">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="feat-h6 sub-title main-color mb-15">
                Na nás se můžete spolehnout
              </h6>
              <h3 className="feat-h3 h4 mb-30">
                Spojujeme energii mladého talentu se spolehlivostí ostřílených profesionálů.
              </h3>
              <p className="feat-paragraph">
                Podání ruky je pro nás stejně svaté jako ta nejlépe sepsaná smlouva. Pokud se na něčem
                domluvíme, bereme to jako absolutní povinnost splnit naši část dohody.
              </p>
              <Link href="/nas-tym" className="btn-crev flex align-center mt-40">
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </span>
                <span className="text">Více o nás</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Image & Info Items */}
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row mx-0">
                <div className="col-md-4 relative">
                  <Image
                    fill
                    src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/fotoprodukce-YxyVSK0y1wHgrd2VKp46H7lU8wzGJO.jpg"
                    alt="Dlouhodobé vztahy"
                    className="object-cover"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 25vw, 15vw"
                  />
                </div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Inovativní řešení</h5>
                    <p>
                      Navrhneme pro vás řešení, které předbíhá svou dobu a které vás dostane do popředí
                      vašeho oboru.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item mb-30">
              <div className="row mx-0">
                <div className="col-md-4 relative">
                  <Image
                    fill
                    src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/sebastian-2-zWCZ0gjcglBou2hDnRcZr4dPInhuwk.jpg"
                    alt="Dlouhodobé vztahy"
                    className="object-cover"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 25vw, 15vw"
                  />
                </div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Profesionální přístup</h5>
                    <p>
                      Inovace má u nás sice své důležité místo, ale nikdy ne na úkor profesionality a
                      dobré morálky.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="row mx-0">
                <div className="col-md-4 relative">
                  <Image
                    fill
                    src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/schuzka-2-tjbOkWyEtYv76hp7f65UGgp7mTmvek.jpg"
                    alt="Dlouhodobé vztahy"
                    className="object-cover"
                    sizes="(max-width: 575px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 25vw, 15vw"
                  />
                </div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Dlouhodobé vztahy</h5>
                    <p>
                      Zaměřujeme se na utváření silných a dlouhodobých vztahů s našimi klienty.
                      Naší ambicí je zajistit, aby každá vaše interakce s námi posunula vaše podnikání
                      vpřed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-blur absolute">
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

export default Feat;