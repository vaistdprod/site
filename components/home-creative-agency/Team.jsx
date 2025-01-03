import React from 'react';
import Link from 'next/link';
import data from '@/data/nas-tym';

function Team() {
  return (
    <section className="team-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Pracujeme pro vás <span className="fw-200">nonstop</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a href="/pribeh" className="butn butn-sm butn-bord radius-30">
                <span>O nás</span>
              </a>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Náš tým</span>
            <span className="thin"></span>
          </h6>
        </div>

        <div className="row">
          {data.slice(0, 5).map((item, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <div className="cont text-center pt-30 pb-30">
                  <Link href={`/nas-tym/${item.slug}`}>
                    <div className="info">
                      <h6>{item.name}</h6>
                      <span className="fz-14 p-color mt-10">{item.subName}</span>
                    </div>
                  </Link>

                  <div className="social mt-20">
                    <div className="links">
                      <Link
                        href={item.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href={`tel:${item.phone.replace(/\s+/g, '')}`}>
                        <i className="fas fa-phone"></i>
                      </Link>
                      <Link href={`mailto:${item.email}`}>
                        <i className="fas fa-envelope"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="img">
                  <Link href={`/nas-tym/${item.slug}`}>
                    <img src={item.img} alt={item.name} />
                  </Link>
                </div>

                <div className="circle-blur">
                  <img src="/assets/imgs/patterns/blur1.png" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;