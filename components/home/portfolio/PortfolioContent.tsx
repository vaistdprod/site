import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import type { SwiperOptions } from '@/types';

interface PortfolioItem {
  id: string;
  img: string;
  alt: string;
  title: string;
  subTitle: string;
}

interface PortfolioContentProps {
  swiperItems: (PortfolioItem | undefined)[];
  swiperOptions: SwiperOptions;
  arrowPrevRef: React.RefObject<HTMLDivElement | null>;
  arrowNextRef: React.RefObject<HTMLDivElement | null>;
  paginationRef: React.RefObject<HTMLDivElement | null>;
}

export default function PortfolioContent({
  swiperItems,
  swiperOptions,
  arrowPrevRef,
  arrowNextRef,
  paginationRef
}: PortfolioContentProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="work-crev section-padding">
      <div className="container relative pb-80">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="sub-title main-color mb-5">Naše portfolio</span>
              <h3 className="fw-600 fz-50 uppercase">
                <span>Vybrané <span className="fw-200">projekty</span></span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div
                  ref={arrowPrevRef}
                  className="swiper-button-prev circle-button cursor-pointer flex justify-center align-center"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <span className="circle hover-anim">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </span>
                </div>
                <div
                  ref={arrowNextRef}
                  className="swiper-button-next circle-button cursor-pointer flex justify-center align-center"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <span className="circle hover-anim">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-swiper out-right">
          <Swiper 
            {...swiperOptions} 
            className="swiper-container"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {swiperItems.map((item) => {
              if (!item) return null;
              return (
                <SwiperSlide key={item.id} tabIndex={0} aria-hidden={false}>
                  <div className="item flex justify-between">
                    <div className="cont col-lg-6">
                      <Link href={`/portfolio/${item.id}`} tabIndex={0}>
                        <h6 className="sub-title main-color mb-15">{item.subTitle}</h6>
                        <h2 className="mb-5">{item.title}</h2>
                      </Link>
                      <Link
                        href={`/portfolio/${item.id}`}
                        className="btn-crev flex align-center mt-30"
                        tabIndex={0}
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <FontAwesomeIcon icon={faArrowRight} />
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
          <div ref={paginationRef} className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
