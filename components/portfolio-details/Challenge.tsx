import React from 'react';

import { PortfolioDetailProps } from '@/types/portfolio';

function Challenge({ data }: PortfolioDetailProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Kategorie:</span>
                <h6>{data.category}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Klient:</span>
                <h6>{data.client}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Počátek:</span>
                <h6>{data.startDate}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Design:</span>
                <h6>{data.designer}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">01 . {data.challenge.title}</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    {data.challenge.description}
                  </h5>
                  {/* Additional detailed information can be added here if available, add another p tag if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
