'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd relative">
      <div className="container relative z-7">
        <div className="sec-head mb-80">
          <div className="flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Specializace</span>
              <h3 className="fw-600 fz-50 text-u  ">
                <span className="">
                  Naše služby <span className="fw-200">služby</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <Link href="/page-services" className="btn btn-sm btn-bord radius-30">
                <span>Zobrazit</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2>
                    UI / UX <span className="fw-200">Design</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We help our client suceed by creating identities, digital experiences, and printmaterials that communicate clearly
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img o-hidden">
                <img src="/assets/imgs/serv-img/1.jpg" alt="" />
                <Link href="/page-services-details">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2>
                    Brand <span className="fw-200">Strategy</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We help our client suceed by creating identities, digital experiences, and printmaterials that communicate clearly
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img o-hidden">
                <img src="/assets/imgs/serv-img/2.jpg" alt="" />
                <Link href="/page-services-details">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Design</span>
                  <h2>
                    SEO / <span className="fw-200">Marketing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  We help our client suceed by creating identities, digital experiences, and printmaterials that communicate clearly
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img o-hidden">
                <img src="/assets/imgs/serv-img/3.jpg" alt="" />
                <Link href="/page-services-details">
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;