import React from 'react';
import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Marq2 from '@/components/common/static/Marq2';
import Navbar from '@/components/common/navbar/Navbar';
// import Clients from '@/components/home/Clients';
// import Testimonials from '@/components/home/Testimonials';
import Header from '@/components/faq/Header';
import FAQS from '@/components/faq/faqs/FAQS';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';

export const metadata = {
  title: "FAQ | TD Productions | Posouváme hranice digitální inovace",
  description: "Objevte odpovědi na nejčastější dotazy k webových stránkám, správě sociálních médií a dalším marketingovým službám společnosti TD Productions.",
  keywords: [
    "jednoduché webové stránky za nejlepší ceny ostrava​",
    "tvorba webových stránek cena​",
    "cena tvorby webových stránek",
    "cena za tvorbu webových stránek",
    "cena za tvorbu webových stránek uživatel​",
    "cena tvorba webových stránek​"
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/nejcastejsi-dotazy",
    title: "FAQ | TD Productions | Posouváme hranice digitální inovace",
    description: "Objevte odpovědi na nejčastější dotazy k webových stránkám, správě sociálních médií a dalším marketingovým službám společnosti TD Productions.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marketingová agentura TD Productions zodpovídá nejčastější otázky, které dostává od klientů."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | TD Productions | Posouváme hranice digitální inovace",
    description: "Objevte odpovědi na nejčastější dotazy k webových stránkám, správě sociálních médií a dalším marketingovým službám společnosti TD Productions.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/nejcastejsi-dotazy"
  }
};

export default function FAQPage() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Header />
            <FAQS />
            <Marq2 />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}