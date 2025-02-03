'use client';
import React from 'react';
import Image from 'next/image';

export default function Faq() {
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

  return (
    <section className="intro-accord relative">
      <div className="container relative z-7">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div
              className="img md-mb50 h-100 relative"
            >
              <Image
                src="/assets/imgs/fotoprodukce.jpg"
                alt="Fotoprodukce"
                fill
                className="circle-img object-cover"
                sizes="(max-width: 991px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Proč zvolit TD Productions?</h6>
                <h3>
                  Spolupráce s námi<br />
                </h3>
              </div>

              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Expertní tým s přesahem do sousedících oborů</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Díky našemu expertnímu týmu a vazbám na zkušené externí dodavatele dokážeme
                      zajistit efektivní spolupráci a špičkové výsledky u projektů menšího, středního i velkého rozsahu.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Spolehlivost a odpovědnost</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      Ve spolupráci s TD Productions získáváte kromě inovativního a precizního produktu také
                      spolehlivý a odpovědný přístup. To, na čem se domluvíme pro vás vždy zajistíme.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Partneři na dlouhou trať</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
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
