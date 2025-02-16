export {};

declare module '@/data/mergedServices.json' {
  const value: { [key: string]: any }; // Replace `any` with a more specific type if possible
  export default value;
}

declare module '@/data/testimonials' {
  interface Testimonial {
    img: string;
    name: string;
    subName: string;
    desc: string;
  }

  const testimonials: Testimonial[];
  export default testimonials;
}

export interface PageProps {
  params: {
    [key: string]: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface BlogProps extends PageProps {
  params: {
    slug: string;
  };
}

export interface PortfolioProps extends PageProps {
  params: {
    id: string;
  };
}

export interface TeamProps extends PageProps {
  params: {
    member: string;
  };
}

export interface ServiceProps extends PageProps {
  params: {
    service: string;
  };
}

export interface GSAPContext {
  selector: (selector: string) => NodeListOf<Element>;
}

export interface SwiperInstance {
  realIndex: number;
  slides: Element[];
  activeIndex: number;
  params: {
    navigation: {
      prevEl: Element | null;
      nextEl: Element | null;
    };
    pagination: {
      el: Element | null;
    };
  };
}

export interface SwiperOptions {
  modules?: any[];
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  loop?: boolean;
  touchRatio?: number;
  speed?: number;
  pagination?: {
    el: Element | null;
    type?: string;
  };
  navigation?: {
    nextEl: Element | null;
    prevEl: Element | null;
  };
  onBeforeInit?: (swiper: SwiperInstance) => void;
  onSlideChange?: (swiper: SwiperInstance) => void;
}