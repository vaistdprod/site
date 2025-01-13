'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Image from 'next/image';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="header header-personal valign position-relative overflow-hidden" data-overlay-dark="6">
      <video
        className="position-absolute top-0 start-0 w-100 h-100"
        src="/assets/imgs/tdprod-promo.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover', zIndex: -1 }}
      />

      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <Image
                    src="/assets/imgs/logo-light.svg"
                    alt="Logo"
                    width={33}
                    height={25}
                    className="logo-image"
                  />
                </span>{' '}
                Vítejte
              </h6>
              <h1 className="fw-700 mb-10">
                TD <span className="main-color">Productions</span>
              </h1>
              <h3>Posouváme hranice digitální inovace</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/kontakty"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Kontaktujte nás</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <Image
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt="Šipka"
                        width={170}
                        height={157}
                        className="arrow-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email:</h6>
            <a
              href="mailto:info@tdprod.cz"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@tdprod.cz
            </a>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Telefon:</h6>
            <a
              href="tel:+420737065717"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              +420 737 065 717
            </a>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Adresa:</h6>
            <a
              href="https://maps.app.goo.gl/ZrSaQYLotGqCciX79"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              28. října 205/45, 702 00 Ostrava
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;