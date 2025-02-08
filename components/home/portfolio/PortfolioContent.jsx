// components/home/PortfolioContent.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowRight as faArrowRightIcon } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PortfolioContent({ swiperItems, swiperOptions }) {
  return (
    <section className="work-crev section-padding">
      <div className="container relative pb-80">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="sub-title main-color mb-5">Naše portfolio</span>
              <h3 className="fw-600 fz-50 text-u">
                <span>Vybrané <span className="fw-200">projekty</span></span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="swiper-button-next">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-swiper out-right">
          <Swiper {...swiperOptions} className="swiper-container">
            {swiperItems.map((item) => {
              if (!item) return null;
              return (
                <SwiperSlide key={item.id} tabIndex={0} aria-hidden={false}>
                  <div className="item flex justify-between">
                    <div className="cont col-lg-6">
                      <Link href={`/portfolio/${item.id}`} tabIndex={0}>
                        <h6 className="sub-title main-color mb-15">{item.category}</h6>
                        <h2 className="mb-5">{item.title}</h2>
                        <h3>{item.subTitle}</h3>
                      </Link>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="btn-crev flex align-center mt-30"
                        tabIndex={0}
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <FontAwesomeIcon icon={faArrowRightIcon} />
                          </span>
                        </span>
                        <span className="text">Zobrazit detail</span>
                      </Link>
                    </div>
                    <div className="img col-lg-6 relative">
                      <Link
                        href={`/portfolio/${item.id}`}
                        style={{ position: 'relative', height: '100%', width: '100%' }}
                        tabIndex={0}
                      >
                        <Image
                          fill
                          src={item.img}
                          alt={item.alt}
                          className="radius-15 object-cover"
                          sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, 33vw"
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
