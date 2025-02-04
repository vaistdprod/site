'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import portfolioData from "@/data/portfolioData.json";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const { portfolio } = portfolioData;
  const { items, showcaseIds } = portfolio;
  const swiperItems = showcaseIds.map((id) => items.find((obj) => obj.id === id));
  const [realIndex, setRealIndex] = useState(0);
  const swiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: "auto",
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: ".work-crev .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".work-crev .swiper-button-next",
      prevEl: ".work-crev .swiper-button-prev",
    },
    onSlideChange: (swiper) => setRealIndex(swiper.realIndex),
  };
  return (
    <section className="work-crev section-padding">
      <div className="container relative pb-80">
        <div className="sec-head mb-80">
          <div className="flex align-center">
            <div>
              <span className="sub-title main-color mb-5">Naše portfolio</span>
              <h3 className="fw-600 fz-50 text-u  ">
                <span className="">
                  Vybrané <span className="fw-200">projekty</span>
                </span>
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
            {swiperItems.map((item, i) => {
              if (!item) return null;
              const isActive = i === realIndex;
              return (
                <SwiperSlide key={item.id} tabIndex={isActive ? 0 : -1} aria-hidden={!isActive}>
                  <div className="item flex justify-between">
                    <div className="cont col-lg-6">
                      <Link href={`/portfolio/${item.id}`} tabIndex={isActive ? 0 : -1}>
                        <h6 className="sub-title main-color mb-15">{item.category}</h6>
                        <h2 className="mb-5">{item.title}</h2>
                        <h3>{item.subTitle}</h3>
                      </Link>
                      <Link href={`/portfolio/${item.id}`} className="btn-crev flex align-center mt-30" tabIndex={isActive ? 0 : -1}>
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </span>
                        <span className="text">Zobrazit detail</span>
                      </Link>
                    </div>
                    <div className="img col-lg-6 relative">
                      <Link href={`/portfolio/${item.id}`} style={{ position: "relative", height: "100%", width: "100%" }} tabIndex={isActive ? 0 : -1}>
                        <Image
                          fill
                          src={item.img}
                          alt={item.alt}
                          className="radius-15 object-cover"
                          sizes="(max-width: 991px) 100vw, 50vw"
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