import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Marq2 from '@/components/common/static/Marq2';
import Navbar from '@/components/common/navbar/Navbar';
import Team from '@/components/home/team/Team';
import Header from '@/components/team/Header';
import Intro from '@/components/team/intro/Intro';
import Numbers from '@/components/common/numbers/Numbers';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import { getMemberList } from "@/lib/team";
import React from 'react';

export const metadata = {
  title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
  description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
  keywords: [
    'Matěj Vais',
    'Martin Studnický',
    'Matyáš Vaněk',
    'Sebastian Vaněk',
    'Matěj Turek',
    'kdo je td productions',
    'co je td productions'
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/nas-tym",
    title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
    description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tým marketingové agentury TD Productions."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
    description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/nas-tym"
  }
};

export default function Home() {
const members = getMemberList();

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
            <Numbers />
            <Team members={members} />
            <Marq2 />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}