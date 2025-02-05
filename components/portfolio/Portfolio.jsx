'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function PortfolioGrid() {
  const { portfolio } = portfolioData;
  const { items, showcaseIds, categories } = portfolio;
  const gridItemsData = showcaseIds.map((id) => items.find((obj) => obj.id === id));

  const [activeFilter, setActiveFilter] = useState('*');
  const containerRef = useRef(null);

  const layoutGrid = () => {
    const container = containerRef.current;
    if (!container) return;
    const itemsEls = container.querySelectorAll('.grid-item');
    if (itemsEls.length === 0) return;
    const containerWidth = container.clientWidth;
    let columns;
    if (containerWidth <= 767) {
      columns = 1;
    } else if (containerWidth <= 991) {
      columns = 2;
    } else {
      columns = 3;
    }
    const computedWidth = Math.floor(containerWidth / columns);
    const offsetX = (containerWidth - columns * computedWidth) / 2;
    const colHeights = new Array(columns).fill(0);
    itemsEls.forEach((item) => {
      if (item.classList.contains('filtered-out')) {
        item.style.opacity = 0;
        return;
      }
      item.style.width = `${computedWidth}px`;
      const itemHeight = item.offsetHeight;
      const minColIndex = colHeights.indexOf(Math.min(...colHeights));
      const left = minColIndex * computedWidth + offsetX;
      const top = colHeights[minColIndex];
      item.style.transform = `translate(${left}px, ${top}px)`;
      item.style.opacity = 1;
      colHeights[minColIndex] += itemHeight;
    });
    container.style.height = `${Math.max(...colHeights)}px`;
  };

  useEffect(() => {
    layoutGrid();
    window.addEventListener('resize', layoutGrid);
    return () => window.removeEventListener('resize', layoutGrid);
  }, [activeFilter]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const itemsEls = container.querySelectorAll('.grid-item');
    const filterClass = activeFilter === '*' ? '*' : activeFilter.replace(/^\./, '');
    itemsEls.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      if (filterClass === '*' || itemCategory === filterClass) {
        item.classList.remove('filtered-out');
      } else {
        item.classList.add('filtered-out');
      }
    });
    layoutGrid();
  }, [activeFilter]);

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
                    onClick={() => setActiveFilter(cat.filter)}
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
        <div ref={containerRef} className="gallery row md-marg" style={{ position: 'relative' }}>
          {gridItemsData.map((item) => {
            if (!item) return null;
            const catSlug = item.category.replace(/\s+/g, '-');
            return (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 grid-item absolute ${catSlug}`}
                data-category={catSlug}
              >
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
                      <span className="p-color mb-5 sub-title w-100">{item.subTitle}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGrid;