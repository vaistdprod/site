export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
  desc: string;
  img: string;
  subName: string;
}

declare module '@/data/testimonials' {
  const testimonials: Testimonial[];
  export default testimonials;
}
