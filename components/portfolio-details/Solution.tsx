import React from 'react';

import { PortfolioDetailProps } from '@/types/portfolio';

function Solution({ data }: PortfolioDetailProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">02 . {data.solution.title}</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <p className="fz-18">
                    {data.solution.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
