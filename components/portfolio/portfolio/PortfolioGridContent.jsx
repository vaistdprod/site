import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioGridContent() {
  const { portfolio } = portfolioData;
  const { items, showcaseIds, categories } = portfolio;
  const gridItemsData = showcaseIds.map((id) => items.find((obj) => obj.id === id));
  const activeFilter = '*';

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
          <div className="filtering col-lg-8 flex justify-end align-end">
            <div className="filter">
              {categories.map((cat, idx) => {
                const isAll = cat.filter === '*';
                const catName = cat.name;
                const catSlug = catName.replace(/\s+/g, '-');
                const count = isAll
                  ? gridItemsData.length
                  : gridItemsData.filter((item) => item && item.category.replace(/\s+/g, '-') === catSlug).length;
                return (
                  <span
                    key={idx}
                    data-filter={cat.filter}
                    className={activeFilter === cat.filter ? 'active' : ''}
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
      <div className="container">
        <div className="gallery row md-marg" style={{ position: 'relative', height: 'auto' }}>
          {gridItemsData.map((item) => {
            if (!item) return null;
            const catSlug = item.category.replace(/\s+/g, '-');
            return (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 grid-item absolute ${catSlug}`}
                data-category={catSlug}
                style={{ transform: 'translate(0,0)', opacity: 1 }}
              >
                <div className="grid-item-inner">
                  <div className="item mb-50">
                    <div className="img relative" style={{ height: '300px' }}>
                      <Link href={`/portfolio/${item.id}`} style={{ position: 'relative', height: '100%', width: '100%' }}>
                        <Image
                          fill
                          src={item.img}
                          alt={item.alt}
                          className="img-fluid object-cover"
                          sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, (max-width: 1199px) 37vw, 28vw"
                        />
                      </Link>
                    </div>
                    <div className="cont flex align-end mt-30">
                      <div>
                        <span className="p-color mb-5 sub-title w-full">{item.subTitle}</span>
                        <Link href={`/portfolio/${item.id}`}>
                          <h6>{item.title}</h6>
                        </Link>
                      </div>
                      <div className="ml-auto">
                        <Link href={`/portfolio/${item.id}`} aria-label={`Detail projektu "${item.title}"`}>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
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
