// components/home/Portfolio.jsx
'use client';

import React, { useRef, useState } from 'react';
import PortfolioContent from './PortfolioContent';
import portfolioData from '@/data/portfolioData.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const containerRef = useRef(null);
  const { portfolio } = portfolioData;
  const { items, showcaseIds } = portfolio;
  const swiperItems = showcaseIds.map((id) => items.find((obj) => obj.id === id));
  const [realIndex, setRealIndex] = useState(0);

  // Define Swiper options with dynamic behavior
  const swiperOptions = {
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
    onSlideChange: (swiper) => {
      setRealIndex(swiper.realIndex);
      const activeSlideCont = swiper.slides[swiper.activeIndex].querySelector('.item .cont');
      if (activeSlideCont) {
        gsap.fromTo(
          activeSlideCont,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );
      }
    },
  };

  // Attach GSAP animations for section header and slider container
  useGSAP(
    (context) => {
      const secHead = context.selector('.sec-head');
      const workSwiper = context.selector('.work-swiper');
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
        .from(secHead, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
        })
        .fromTo(
          workSwiper,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'transform',
          },
          '-=0.4'
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <PortfolioContent swiperItems={swiperItems} swiperOptions={swiperOptions} />
    </div>
  );
}
