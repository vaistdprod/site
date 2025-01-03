'use client';

import React, { useEffect } from 'react';
import data from '@/data/portfolioData.json';

function PortfolioGrid() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const { default: initIsotope } = await import('@/common/initIsotope');
        initIsotope();
      })();
    }
  }, []);

  const { gridItems, categories } = data;

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    data-filter={category.filter}
                    className={category.name === 'All' ? 'active' : ''}
                    data-count={category.count}
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="gallery row md-marg">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 items ${item.category}`}
            >
              <div className="item mb-50">
                <div className="img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="cont d-flex align-items-end mt-30">
                  <div>
                    <span className="p-color mb-5 sub-title">
                      {item.subTitle}
                    </span>
                    <h6>{item.title}</h6>
                  </div>
                  <div className="ml-auto">
                    <a href={item.link}>
                      <span className="fas fa-arrow-right"></span>
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

export default PortfolioGrid;