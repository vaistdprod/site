import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6 valign">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-12">
                  <Image
                    src="/assets/imgs/klient.jpg"
                    alt="Ředitel TD Productions si podává ruku s klientem."
                    width={617}
                    height={347}
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
          <div className="col-lg-6 valign">
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
                  Naše služby <i className="fas fa-arrow-right"></i>
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