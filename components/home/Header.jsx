'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';

const PersonalHeader = () => {
  return (
    <Header
      delay={2}
      overlayDark={6}
      className="header header-personal flex align-center relative o-hidden"
      bgContent={
        <video
          className="absolute top-0 start-0 w-100 h-100 object-cover -z-1"
          src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/tdprod-promo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      }
    >
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
              </span>
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
                <div className="flex align-center mt-60">
                  <Link href="/kontakty" className="btn btn-md btn-bord radius-30">
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

      <div className="info flex align-center justify-end mt-100">
        <div className="item">
          <h3 className="sub-title mb-10">Email:</h3>
          <Link href="mailto:info@tdprod.cz" className="p-color" target="_blank" rel="noopener noreferrer">
            info@tdprod.cz
          </Link>
        </div>
        <div className="item">
          <h3 className="sub-title mb-10">Telefon:</h3>
          <Link href="tel:+420737065717" className="p-color" target="_blank" rel="noopener noreferrer">
            +420 737 065 717
          </Link>
        </div>
        <div className="item">
          <h3 className="sub-title mb-10">Adresa:</h3>
          <Link href="https://maps.app.goo.gl/ZrSaQYLotGqCciX79" className="p-color" target="_blank" rel="noopener noreferrer">
            28. října 205/45, 702 00 Ostrava
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default PersonalHeader;
