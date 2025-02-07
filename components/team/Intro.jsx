'use client';
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Intro() {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const imgContainer = context.selector(".img");
    const textContainer = context.selector(".cont");

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
      .from(imgContainer, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        textContainer,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="page-intro section-padding">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6 flex">
            <div className="img md-mb80">
              <div className="row col-12">
                <div style={{ position: "relative", height: "400px" }}>
                  <Image
                    src="/assets/imgs/klient.jpg"
                    alt="Jednatel společnosti TD Productions, Matěj Vais, si podává ruku s klientem."
                    fill
                    style={{ objectFit: "cover", objectPosition: "55% 50%" }}
                    sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, 43vw"
                  />
                  <div className="img-icon">
                    <Image
                      src="/assets/imgs/logo-light-stroke.svg"
                      alt="Logo TD Productions"
                      width={25}
                      height={19}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 flex align-center">
            <div className="cont">
              <h3 className="mb-30">
                <span className="fw-200">Marketingová agentura</span>, která
                vám pomáhá <span className="fw-200">růst.</span>
              </h3>
              <p>
                Jsme mladý, ambiciózní tým a do každého projektu vkládáme maximum.
                V rámci spolupráce fungujeme s naprostou precizností a profesionalitou. Neúnavně bojujeme za vaše výsledky.
                Neustále posouváme hranice a věříme, že tvrdá práce a odhodlání jsou klíčem k úspěchu. Z naší spolupráce tak vždycky vzejde to nejlepší.
              </p>
              <Link href="/nase-sluzby" className="underline main-color mt-40">
                <span className="text">
                  Naše služby <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;