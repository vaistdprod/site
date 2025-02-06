'use client';
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Faq() {
  const containerRef = useRef(null);

  useGSAP((context) => {
    const leftCol = context.selector(".col-lg-6 .img");
    const rightCol = context.selector(".col-lg-6 .accordion");
    const accordionItems = context.selector(".accordion .item");

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
      .from(leftCol, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        rightCol,
        {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        accordionItems,
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

  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <section ref={containerRef} className="intro-accord relative">
      <div className="container relative z-7">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50 h-100 relative">
              <Image
                src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/fotoprodukce-YxyVSK0y1wHgrd2VKp46H7lU8wzGJO.jpg"
                alt="Fotoprodukce"
                fill
                className="object-center full-size object-cover"
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, 43vw"
              />
            </div>
          </div>

          <div className="col-lg-6 flex align-center">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Proč zvolit TD Productions?</h6>
                <h3>
                  Spolupráce s námi<br />
                </h3>
              </div>

              <div className="accordion bord">
                <div className="item active fadeInUp">
                  <div onClick={openAccordion} className="title">
                    <h6>Expertní tým s přesahem do sousedících oborů</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Díky našemu expertnímu týmu a vazbám na zkušené externí dodavatele dokážeme
                      zajistit efektivní spolupráci a špičkové výsledky u projektů menšího, středního i velkého rozsahu.
                    </p>
                  </div>
                </div>

                <div className="item fadeInUp">
                  <div onClick={openAccordion} className="title">
                    <h6>Spolehlivost a odpovědnost</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Ve spolupráci s TD Productions získáváte kromě inovativního a precizního produktu také
                      spolehlivý a odpovědný přístup. To, na čem se domluvíme pro vás vždy zajistíme.
                    </p>
                  </div>
                </div>

                <div className="item fadeInUp">
                  <div onClick={openAccordion} className="title">
                    <h6>Partneři na dlouhou trať</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p>
                      Kvalitní produkt vyžaduje pravidelnou správu a údržbu.
                      V našem případě se můžete spolehnout, že se Vám o výsledný projekt dlouhodobě postaráme a udržíme jej ve výborné kondici.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
