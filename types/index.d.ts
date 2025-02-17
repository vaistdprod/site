import { Swiper as SwiperType } from 'swiper';
import { SwiperProps } from 'swiper/react';

export interface PageProps {
  params: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export interface BlogPageProps extends PageProps {
  searchParams?: Promise<{
    tag?: string;
    search?: string;
  }>;
}

export interface TeamProps extends PageProps {
  params: Promise<{
    member: string;
  }>;
}

export interface ServiceProps extends PageProps {
  params: Promise<{
    service: string;
  }>;
}

export interface Service {
  title: string;
  icon: string;
  desc: string;
  link: string;
  tags: string[];
  img: string;
  bullets: string[];
  stats: Array<{ value: string; label: string }>;
  feat: Array<{ step: string; title: string; desc: string }>;
  intro2: {
    whyTitle: string;
    accordion: Array<{ title: string; desc: string }>;
  };
}

export interface Member {
  name: string;
  role: string;
  image: string;
  slug: string;
  instagram?: string;
  facebook?: string;
  phone?: string;
  email?: string;
  about: string;
  skills?: Array<{
    name: string;
    value: string;
  }>;
}

import type { NavigationOptions, PaginationOptions } from 'swiper/types';

export type SwiperOptions = Omit<SwiperProps, 'children' | 'ref'> & {
  pagination?: PaginationOptions;
  navigation?: NavigationOptions;
  onSlideChange?: (swiper: SwiperType) => void;
  onInit?: (swiper: SwiperType) => void;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  loop?: boolean;
  speed?: number;
  touchRatio?: number;
};
