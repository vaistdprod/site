import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function FeatContent({ serviceData }) {
  return (
    <section className="feat relative">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="flex align-center mb-30">
            <h2 className="fw-600 fz-70 uppercase">
              <span>Proces <span className="fw-200">spolupráce</span></span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/kontakty" className="btn btn-sm btn-bord radius-30">
                <span>Kontaktujte nás</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
          <h6 className="sub-title main-color flex align-center">
            <span>Akční kroky</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {serviceData.feat?.map((item, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="radius-15 md-mb50">
                <h3 className="mb-30 p-color stroke-30">{item.step}.</h3>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
