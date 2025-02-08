import ProgressScroll from "@/components/common/progress-scroll/ProgressScroll";
import Cursor from '@/components/common/Cursor';
import LoadingScreen from "@/components/common/loading-screen/LoadingScreen";
import Footer from "@/components/common/footer/Footer";
import Marq2 from "@/components/common/static/Marq2";
import Navbar from "@/components/common/navbar/Navbar";
import Services from "@/components/services/services/Services";
import Faq from "@/components/services/faq/Faq";
import Header from "@/components/services/Header";
import Numbers from "@/components/services/numbers/Numbers";
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import { getLightServices } from '@/lib/services';

export const metadata = {
  title: "Služby | TD Productions | Posouváme hranice digitální inovace",
  description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Kontaktujte nás ještě dnes a vylaďte svoje podnikání s TD Productions. Sídlíme v Ostravě.",
  keywords: [
    "digitální marketing ostrava",
    "implementace AI ostrava",
    "umělá inteligence ostrava",
    "chatbot ostrava",
    "videoprodukce ostrava",
    "fotoprodukce ostrava",
    "sociální sítě ostrava",
    "ppc reklamy ostrava",
    "seo optimalizace ostrava",
    "správa sociálních sítí"
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/nase-sluzby",
    title: "Naše služby | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Kontaktujte nás ještě dnes a vylaďte svoje podnikání s TD Productions. Sídlíme v Ostravě.",
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
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Kontaktujte nás ještě dnes a vylaďte svoje podnikání s TD Productions. Sídlíme v Ostravě.",
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
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Header />
            <Services services={services} />
            <Numbers />
            <Faq />
            <Marq2 />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}