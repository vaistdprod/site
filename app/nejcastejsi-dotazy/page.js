import React from 'react';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
// import Clients from '@/components/home/Clients';
// import Testimonials from '@/components/home/Testimonials';
import Header from '@/components/faq/Header';
import FAQS from '@/components/faq/FAQS';

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
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <FAQS />
            {/* <Testimonials />
            <Clients /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}