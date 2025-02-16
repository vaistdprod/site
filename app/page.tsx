import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor'; 
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Marq2 from '@/components/common/static/Marq2';
import Feat from '@/components/home/feat/Feat';
import Marq from '@/components/common/static/Marq';
import Navbar from '@/components/common/navbar/Navbar';
import Services from '@/components/home/services/Services';
import Portfolio from '@/components/home/portfolio/Portfolio';
import Team from '@/components/home/team/Team';
import Blog from '@/components/home/blog/Blog';
import Header from '@/components/home/Header';
import About from '@/components/home/about/About';
import { getAllPosts } from '@/lib/posts';
import { getMemberList } from '@/lib/team';
import { getLightServices } from '@/lib/services';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import React from 'react';

export const metadata = {
  title: 'TD Productions | Posouváme hranice digitální inovace',
  description:
    'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
  keywords: [
    'TD Productions',
    'webové stránky Ostrava',
    'webové aplikace Ostrava',
    'web design Ostrava',
    'digitální marketing Ostrava',
    'weby Ostrava',
    'marketingová agentura Ostrava',
    'web na míru Ostrava',
    'tvorba webových stránek ostrava',
    'tvorba webu na míru ostrava'
  ],
  openGraph: {
    type: 'website',
    url: 'https://tdprod.cz/',
    title: 'TD Productions | Posouváme hranice digitální inovace',
    description:
      'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
    images: [
      {
        url: 'https://tdprod.cz/assets/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Úvodní fotka TD Productions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TD Productions | Posouváme hranice digitální inovace',
    description:
      'Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku.',
    images: ['https://tdprod.cz/assets/imgs/og-image.jpg']
  },
  alternates: {
    canonical: 'https://tdprod.cz/'
  }
};

export default async function Home() {
  const posts = await getAllPosts();
  const members = getMemberList();
  const services = getLightServices();

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
        <main className="main-bg o-hidden">
          <Header />
          <Marq />
          <About />
          <Services services={services} />
          <Portfolio />
          <Feat />
          <Team members={members} />
          <Blog posts={posts} />
          <Marq2 />
        </main>
        <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}
