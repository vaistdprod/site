import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/portfolio/Header';
import Portfolio from '@/components/portfolio/Portfolio';

export const metadata = {
  title: "Portfolio | TD Productions | Posouváme hranice digitální inovace",
  description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
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
    'tvorba webu na míru ostrava',
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/portfolio",
    title: "Portfolio | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio projektů marketingové agentury TD Productions."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/portfolio"
  }
};

export async function generateStaticParams() {
  return [];
}

export default function Home() {
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
            <Portfolio />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}