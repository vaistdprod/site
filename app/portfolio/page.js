import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Marq2 from '@/components/common/static/Marq2';
import Navbar from '@/components/common/navbar/Navbar';
import Header from '@/components/portfolio/Header';
import Portfolio from '@/components/portfolio/portfolio/PortfolioGrid';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';

export const metadata = {
  title: "Portfolio | TD Productions | Posouváme hranice digitální inovace",
  description: "Prohlédněte si projekty, které našim klientům pomohly dostat se na novou úroveň. Nenechte si rok 2025 proklouznout mezi prsty, kontaktujte nás ještě dnes.",
  keywords: [
    "portfolio td productions",
    "digitální marketing reference",
    "vývoj webů ukázky",
    "kreativní projekty"
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/portfolio",
    title: "Portfolio | TD Productions | Posouváme hranice digitální inovace",
    description: "Prohlédněte si projekty, které našim klientům pomohly dostat se na novou úroveň. Nenechte si rok 2025 proklouznout mezi prsty, kontaktujte nás ještě dnes.",
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
    description: "Prohlédněte si projekty, které našim klientům pomohly dostat se na novou úroveň. Nenechte si rok 2025 proklouznout mezi prsty, kontaktujte nás ještě dnes.",
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
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Header />
            <Portfolio />
            <Marq2 />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}