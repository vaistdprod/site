import React from 'react';
import Image from 'next/image';
import data from '@/data/nas-tym';

function Team() {
  return (
    <section className="team section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Náš tým</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Pracujeme pro vás <span className="fw-200">nonstop.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a href="/o-nas" className="butn butn-sm butn-bord radius-30">
                <span>Příběh</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4 mb-40">
              <div className="item md-mb50">
                <div className="img">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={400}
                  />
                  <div className="info">
                    <span className="fz-12">{item.subName}</span>
                    <h6 className="fz-18">{item.name}</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={`tel:${item.phone.replace(/\s+/g, '')}`}>
                      <i className="fas fa-phone"></i>
                    </a>
                    <a href={`mailto:${item.email}`}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
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