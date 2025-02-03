'use client';
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Services({ services }) {
  return (
    <section className="services-class relative">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-border mb-30">TD záruka</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  Jsme vašimi partnery od prvotního plánování projektu až po jeho finální spuštění a následnou údržbu.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding bord-bottom-grd relative pt-0">
        <div className="sec-head mb-80">
          <div className="flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Naše specializace</span>
              <h3 className="fw-600 fz-50 text-u  ">
                <span className="">
                  Vybrané <span className="fw-200">služby</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <Link href="/nase-sluzby" className="btn btn-sm btn-bord radius-30">
                <span>Zobrazit všechny</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
        </div>

        <div className="row mb-40">
          {Object.entries(services).map(([serviceKey, service]) => (
            <div key={serviceKey} className="col-lg-4">
              <div className="item mb-30">
                <div
                  className="icon-img-60-60 opacity-7 mb-40"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
                <h5>{service.title}</h5>
                <div className="text mt-40">
                  <div className="mb-10">
                    {service.tags && service.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                  <p>{service.desc}</p>
                </div>
                <Link
                  href={`/nase-sluzby${service.link}`}
                  className="mt-40"
                  aria-label={`Více o ${service.title}`}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="/assets/imgs/patterns/blur1.png"
          alt="Efekt rozmazání"
          width={692}
          height={537}
        />
      </div>
    </section>
  );
}

export default Services;