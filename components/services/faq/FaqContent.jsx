import React from "react";
import Image from "next/image";

export default function FaqContent({ onAccordionClick }) {
  return (
    <section className="intro-accord relative">
      <div className="container relative z-7">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50 h-full relative">
              <Image
                src="/assets/imgs/fotoprodukce.jpg"
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
                  <div onClick={onAccordionClick} className="title">
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
                  <div onClick={onAccordionClick} className="title">
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
                  <div onClick={onAccordionClick} className="title">
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
