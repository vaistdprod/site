'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">Na nás se můžete spolehnout</h6>
              <h3 className="mb-30">
                Spojujeme energii mladého talentu se spolehlivostí ostřílených profesionálů.
              </h3>
              <p>
                Podání ruky je pro nás stejně svaté jako ta nejlépe sepsaná smlouva. Pokud se na něčem domluvíme, bereme to jako absolutní povinnost splnit naši část dohody.
              </p>
              <Link
                href="/pribeh"
                className="btn-crev d-flex align-items-center mt-40"
              >
                <span className="hover-this">
                  <span className="circle hover-anim">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </span>
                <span className="text">Více o nás</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/inovace.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Inovativní řešení</h5>
                    <p>
                    Navrhneme pro vás řešení, které předbíhá svou dobu a které vás dostane do popředí vašeho oboru.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/podani-ruky.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Profesionální přístup</h5>
                    <p>
                    Inovace má u nás sice své důležité místo, ale nikdy ne na úkor profesionality a dobré morálky.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/retez.webp"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">Dlouhodobé vztahy</h5>
                    <p>
                    Zaměřujeme se na utváření silných a dlouhodobých vztahů s našimi klienty.
                    Naší ambicí je zajistit, aby každá vaše interakce s námi posunula vaše podnikání vpřed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
            src="/assets/imgs/patterns/blur1.png"
            alt="Blur Pattern"
            width={692}
            height={537}
          />
      </div>
    </section>
  );
}

export default Feat;
