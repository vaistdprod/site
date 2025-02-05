'use client';
import React from 'react';
import data from '@/data/testimonials';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.testimonials .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonials .swiper-button-next',
      prevEl: '.testimonials .swiper-button-prev',
    },
  };

  return (
    <section className="testimonials relative">
      <div className="container section-padding bord-top-grd relative">
        <div className="row">
          <div className="col-lg-4 md-mb50">
            <div className="img-full relative h-100">
              <div className="fit-img h-100 o-hidden">
                <img className="object-cover object-center full-size" src="/assets/imgs/testim/bg.jpg" alt="" />
              </div>
              <div className="fix-img absolute">
                <img src="/assets/imgs/arw1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont-full relative">
              <div
                className="testim-swiper"
                data-carousel="swiper"
                data-loop="true"
                data-space="30"
              >
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                  data-swiper="container"
                >
                  {data.slice(0, 2).map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="content">
                          <div className="text">
                            <p className="fz-30">{item.desc}</p>
                          </div>
                          <div className="info flex align-center pt-40 mt-40 bord-thin-top">
                            <div>
                              <div className="fit-img o-hidden circle">
                                <img className="object-cover object-center full-size" src={item.img} alt="" />
                              </div>
                            </div>
                            <div className="ml-20">
                              <h5>{item.name}</h5>
                              <span className="sub-title main-color">
                                {item.subName}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256.721"
                  height="208.227"
                  viewBox="0 0 256.721 208.227"
                  className="quote-svg absolute"
                >
                  <path
                    data-name="Path"
                    d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                    transform="translate(121.55 640.568)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.322"
                  ></path>
                </svg>
              </div>
              <div className="swiper-arrow-control control-absolute absolute">
                <div className="swiper-button-prev">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="swiper-button-next">
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </div>
              <div className="circle-blur absolute">
                <img src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/blur1-0J2DJ0INNrXDLBO6XFZu6DKiOqorlZ.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;