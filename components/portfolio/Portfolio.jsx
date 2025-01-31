'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData.json';

function PortfolioGrid() {
  const { portfolio } = portfolioData;
  const { items, showcaseIds, categories } = portfolio;

  const gridItems = showcaseIds.map((id) => items.find((obj) => obj.id === id));

  const categoryCountMap = gridItems.reduce((acc, item) => {
    const catKey = item.category.replace(/\s+/g, '-');
    if (!acc[catKey]) acc[catKey] = 0;
    acc[catKey]++;
    return acc;
  }, {});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (async () => {
        const { default: initIsotope } = await import('@/common/initIsotope');
        initIsotope();
      })();
    }
  }, []);

  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">Prohlédněte naše reference</h6>
              <h3>Poslední projekty</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                {categories.map((cat, idx) => {
                  const isAll = cat.filter === '*';
                  const catName = cat.name;
                  const catClassName = catName.replace(/\s+/g, '-');
                  const count = isAll
                    ? gridItems.length
                    : categoryCountMap[catClassName] || 0;

                  return (
                    <span
                      key={idx}
                      data-filter={cat.filter}
                      className={idx === 0 ? 'active' : ''}
                      data-count={count}
                    >
                      {catName}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="gallery row md-marg">
          {gridItems.map((item) => {
            if (!item) return null;
            const className = item.category.replace(/\s+/g, '-');
            return (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 items ${className}`}
              >
                <div className="item mb-50">
                  <div
                    className="img"
                    style={{ position: 'relative', height: '300px' }}
                  >
                    <Link href={`/portfolio/${item.id}`}>
                      <Image
                        fill
                        src={item.img}
                        alt={item.alt}
                        className="img-fluid"
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>
                  </div>
                  <div className="cont d-flex align-items-end mt-30">
                    <div className="">
                      <span className="p-color mb-5 sub-title full-width">
                        {item.subTitle}
                      </span>
                      <Link href={`/portfolio/${item.id}`}>
                        <h6>{item.title}</h6>
                      </Link>
                    </div>
                    <div className="ml-auto">
                    <Link 
                      href={`/portfolio/${item.id}`} 
                      aria-label={`Detail projektu "${item.title}"`}
                    >
                      <span className="fas fa-arrow-right"></span>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;