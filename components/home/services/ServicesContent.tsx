import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ServicesContent({ services }) {
  return (
    <section className="services-class relative">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-border fz-14 relative uppercase ls1 radius-30 mb-30">TD záruka</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4 className="animated-heading">
                  Jsme vašimi partnery od prvotního plánování projektu až po jeho finální
                  spuštění a následnou údržbu.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section-padding bord-bottom-grd relative pt-0">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="rotate-heading sub-title main-color mb-5">
                Specializace
              </span>
              <h3 className="rotate-heading fw-600 fz-50 uppercase">
                Vybrané <span className="fw-200">služby</span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <Link href="/nase-sluzby" className="btn btn-sm btn-bord radius-30">
                <span>Zobrazit všechny</span>
              </Link>
              <Link href="/nase-sluzby">
                <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row mb-40">
          {Object.entries(services).map(([serviceKey, service]) => (
            <div key={serviceKey} className="col-lg-4">
              <div className="item backdrop-15 radius-15 column mb-30">
                <div
                  className="size-60 opacity-7 mb-40"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
                <h5>{service.title}</h5>
                <div className="text mt-40">
                  <div className="mb-10">
                    {service.tags &&
                      service.tags.map((tag, idx) => (
                        <span key={idx} className="tag ls1 fz-12 radius-30 uppercase">
                          {tag}
                        </span>
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

      <div className="circle-blur absolute -z-1">
        <Image
          src="/assets/imgs/bg/blur1.png"
          alt=""
          width={692}
          height={537}
        />
      </div>
    </section>
  );
}
