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
import { SwiperOptions } from 'swiper';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const { portfolio } = portfolioData;
  const { items, showcaseIds } = portfolio;
  const swiperItems = showcaseIds.map((id) => items.find((obj) => obj.id === id));
  const [realIndex, setRealIndex] = useState(0);

  const swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    pagination: {
      el: paginationRef.current,
      type: 'progressbar',
    },
    navigation: {
      nextEl: nextRef.current,
      prevEl: prevRef.current,
    },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.params.pagination.el = paginationRef.current;
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

  useGSAP(() => {
    if (!containerRef.current) return;

    const elements = {
      secHead: '.sec-head',
      workSwiper: '.work-swiper'
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    tl.from(elements.secHead, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    })
    .fromTo(
      elements.workSwiper,
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

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <PortfolioContent
        swiperItems={swiperItems}
        swiperOptions={swiperOptions}
        arrowPrevRef={prevRef}
        arrowNextRef={nextRef}
        paginationRef={paginationRef}
      />
    </div>
  );
}