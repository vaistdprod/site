import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <section className="services-clas">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-bord mb-30">TD záruka</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  Jsme Vašimi partnery od prvotního plánování projektu až po jeho finální spuštění a následnou údržbu.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Naše specializace</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Vybrané <span className="fw-200">služby</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/nase-sluzby"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Zobrazit všechny</span>
              </a>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
        </div>

        <div className="row mb-40">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new-4.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Digitální marketing</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Sociální média</span>
                  <span className="tag">SEO</span>
                </div>
                <p>
                  Nastartujeme vaše podnikání v digitálním prostředí a&nbsp;zajistíme, že mezi vaší konkurencí vyniknete.
                </p>
              </div>
              <a href="/nase-sluzby/digitalni-marketing" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new-5.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Webové stránky</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Wordpress</span>
                  <span className="tag">React</span>
                </div>
                <p>
                  Vytváříme responzivní, rychlé a bezpečné webové stránky, které vaší firmě slouží jako profesionální online vizitka.
                </p>
              </div>
              <a href="/nase-sluzby/webove-stranky" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new-3.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Webové aplikace</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Vývoj</span>
                  <span className="tag">Outsourcing</span>
                </div>
                <p>
                  Hledáte pro vaše podnikání aplikaci na míru? Do detailu s vámi projednáme, co by měla umět a poté ji pro vás od píky vyvineme.
                </p>
              </div>
              <a href="/nase-sluzby/webove-aplikace" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new-6.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Implementace AI</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Propojení</span>
                  <span className="tag">Automatizace</span>
                </div>
                <p>
                  Pomůžeme vám s implementací umělé inteligence pro automatizaci a efektivizaci vašich procesů.
                </p>
              </div>
              <a href="/nase-sluzby/implementace-ai" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Videoprodukce</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Promo</span>
                  <span className="tag">Aftermovie</span>
                </div>
                <p>
                  Produkujeme poutavá videa, která zvýší váš online dosah a pomohou vám lépe komunikovat s vašimi zákazníky.
                </p>
              </div>
              <a href="/nase-sluzby/videoprodukce" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <Image
                  src="/assets/imgs/ikony/ikona-new-2.svg"
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
              <h5>Fotoprodukce</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Soukromé i kulturní akce</span>
                </div>
                <p>
                  Potřebujete pro vaši firmu profi fotografie? My si dáme záležet, abychom vás zvěčnili v tom nejlepším světle.
                </p>
              </div>
              <a href="/nase-sluzby/fotoprodukce" className="mt-40">
                <span className="fas fa-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services