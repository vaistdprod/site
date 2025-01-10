import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from "@/components/common/LoadingScreen";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Services from "@/components/services/Services";
import Faq from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Header from "@/components/services/Header";
import Numbers from "@/components/services/Numbers";
import { getLightServices } from '@/lib/nase-sluzby';

export const metadata = {
  title: "Služby | TD Productions | Posouváme hranice digitální inovace",
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
    url: "https://tdprod.cz/nase-sluzby",
    title: "Naše služby | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marketingová agentura TD Productions poskytuje služby v oblasti digitálního marketingu, vývoje webů i AI řešení."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Naše služby | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/nase-sluzby"
  }
};

export default async function ServicesPage() {
  const services = getLightServices();

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
            <Services services={services} />
            <Numbers />
            <Faq />
            {/* <Testimonials /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}