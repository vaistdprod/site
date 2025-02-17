'use client';

import React, { useRef, useState } from 'react';
import PortfolioContent from './PortfolioContent';
import portfolioData from '@/data/portfolioData.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Swiper as SwiperType } from 'swiper';
import type { NavigationOptions, PaginationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

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

  const handleSlideChange = (swiper: SwiperType) => {
    setRealIndex(swiper.realIndex);
    const activeSlideCont = swiper.slides[swiper.activeIndex].querySelector('.item .cont');
    if (activeSlideCont) {
      gsap.fromTo(
        activeSlideCont,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  };

  const swiperOptions = {
    slidesPerView: 'auto' as const,
    spaceBetween: 80,
    loop: true,
    touchRatio: 0.2,
    speed: 1500,
    modules: [],
    navigation: false,
    pagination: {
      el: paginationRef.current ?? undefined,
      type: 'progressbar' as const,
    } satisfies PaginationOptions,
    onSlideChange: handleSlideChange
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
