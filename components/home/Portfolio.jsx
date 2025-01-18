'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import portfolioData from '@/data/portfolioData.json';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Portfolio() {
  const { portfolio } = portfolioData;
  const { items, showcaseIds } = portfolio;

  // Map those IDs into actual items from "items"
  const swiperItems = showcaseIds.map(id => items.find(obj => obj.id === id));

  const [realIndex, setRealIndex] = useState(0);

  const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: '.work-crev .swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.work-crev .swiper-button-next',
      prevEl: '.work-crev .swiper-button-prev',
    },
    onSlideChange: (swiper) => setRealIndex(swiper.realIndex),
  };

  return (
    <section className="work-crev section-padding">
      <div className="container position-re pb-80">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Naše portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Vybrané <span className="fw-200">projekty</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="fas fa-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-swiper out-right">
          <Swiper {...swiperOptions} className="swiper-container">
            {swiperItems.map((item, i) => {
              if (!item) return null; // safe check
              const isActive = i === realIndex;
              return (
                <SwiperSlide
                  key={item.id}
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                >
                  <div className="item d-flex align-items-center">
                    <div className="cont">
                      <Link href={`/portfolio/${item.id}`}>
                        <h6 className="sub-title main-color mb-15">
                          {item.category}
                        </h6>
                        <h2>
                          {item.title} <br /> {item.subTitle}
                        </h2>
                      </Link>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="btn-crev d-flex align-items-center mt-30"
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </span>
                        <span className="text">Zobrazit detail</span>
                      </Link>
                    </div>
                    <div className="img">
                      <Link href={`/portfolio/${item.id}`}>
                        <Image
                          src={item.img}
                          alt={item.alt}
                          width={1154}
                          height={607}
                          className="radius-15"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
