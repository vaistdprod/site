import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Marq2 from '@/components/common/static/Marq2';
import Navbar from '@/components/common/navbar/Navbar';
import Header from '@/components/gdpr/Header'
import PrivacyPolicy from '@/components/gdpr/Gdpr';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import React from 'react';

export const metadata = {
  title: "Ochrana osobních údajů | TD Productions | Posouváme hranice digitální inovace",
  description: "Zjistěte, jak TD Productions nakládá s osobními údaji v souladu s GDPR. Čtěte o našich zásadách, bezpečnostních opatřeních i vašich právech.",
  keywords: [
    'TD Productions',
    'pověřenec ochrany osobních údajů Ostrava',
    'ochrana osobních údajů Ostrava',
    'gdpr Ostrava',
    'úřad pro ochranu osobních údajů Ostrava',
    'dpo Ostrava gdpr',
    'marketingová agentura Ostrava',
    'úřad na ochranu osobních údajů Ostrava',
    'cookies Ostrava'
    ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/ochrana-osobnich-udaju",
    title: "Ochrana osobních údajů | TD Productions | Posouváme hranice digitální inovace",
    description: "Zjistěte, jak TD Productions nakládá s osobními údaji v souladu s GDPR. Čtěte o našich zásadách, bezpečnostních opatřeních i vašich právech.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TD Productions nakládá s osobními údaji v souladu s GDPR."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ochrana osobních údajů | TD Productions | Posouváme hranice digitální inovace",
    description: "Zjistěte, jak TD Productions nakládá s osobními údaji v souladu s GDPR. Čtěte o našich zásadách, bezpečnostních opatřeních i vašich právech.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/ochrana-osobnich-udaju"
  }
};

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Header />
            <PrivacyPolicy />
            <Marq2 />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}