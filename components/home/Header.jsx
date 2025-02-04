'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from "next/link";

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  return (
    <div 
      className="header header-personal valign relative o-hidden"
      data-overlay-dark="6">
      <video
        className="absolute top-0 start-0 w-100 h-100 object-cover -z-1"
        src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/tdprod-promo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="container relative z-7">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <div className="mb-15 h6">
                <span className="icon-img-30 mr-10">
                  <Image
                    src="/assets/imgs/logo-light.svg"
                    alt="Logo TD Productions"
                    width={33}
                    height={25}
                  />
                </span>{' '}
                Vítejte
              </div>
              <h1 className="fw-700 mb-10">
                TD <span className="main-color">Productions</span>
              </h1>
              <h2 className="h3">Posouváme hranice digitální inovace</h2>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň.
                    </p>
                  </div>
                  <div className="flex align-items-center mt-60">
                    <Link
                      href="/kontakty"
                      className="btn btn-md btn-bord radius-30"
                    >
                      <span className="text">Kontaktujte nás</span>
                    </Link>
                    <div className="icon-img-60 ml-20">
                      <Image
                        src="/assets/imgs/ikony/arrow-down-big.png"
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

        <div className="info flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h3 className="sub-title mb-10">Email:</h3>
            <Link
              href="mailto:info@tdprod.cz"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@tdprod.cz
            </Link>
          </div>
          <div className="item">
            <h3 className="sub-title mb-10">Telefon:</h3>
            <Link
              href="tel:+420737065717"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              +420 737 065 717
            </Link>
          </div>
          <div className="item">
            <h3 className="sub-title mb-10">Adresa:</h3>
            <Link
              href="https://maps.app.goo.gl/ZrSaQYLotGqCciX79"
              className="p-color"
              target="_blank"
              rel="noopener noreferrer"
            >
              28. října 205/45, 702 00 Ostrava
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;