import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ServicesContent({ services }) {
  return (
    <section className="services-class relative section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="sub-title main-color mb-5">Specializace</span>
              <h3 className="fw-600 fz-50 uppercase">
                <span>
                  Seznam <span className="fw-200">služeb</span>
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {Object.entries(services).map(([serviceKey, service]) => (
            <div key={serviceKey} className="col-lg-4">
              <div className="item radius-15 backdrop-15 column mb-30">
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
    </section>
  );
}
