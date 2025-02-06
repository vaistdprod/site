import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/contacts/Header';
import Contact from '@/components/contacts/Contact';
import Map from '@/components/contacts/Map';
import SmoothScrollProvider from '@/components/common/SmoothScrollProvider';

export const metadata = {
  title: "Kontakty | TD Productions | Posouváme hranice digitální inovace",
  description: "Potřebujete nový web, správu sociálních sítí nebo reklamu? Zavolejte na 737 065 717, napište na info@tdprod.cz nebo vyplňte náš kontaktní formulář na webu.",
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
    url: "https://tdprod.cz/kontakty",
    title: "Kontakty | TD Productions | Posouváme hranice digitální inovace",
    description: "Potřebujete nový web, správu sociálních sítí nebo reklamu? Zavolejte na 737 065 717, napište na info@tdprod.cz nebo vyplňte náš kontaktní formulář na webu.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kontaktujte nás ještě dnes. Marketingová agentura TD Productions, jsme zde pro vás."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakty | TD Productions | Posouváme hranice digitální inovace",
    description: "Potřebujete nový web, správu sociálních sítí nebo reklamu? Zavolejte na 737 065 717, napište na info@tdprod.cz nebo vyplňte náš kontaktní formulář na webu.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/kontakty"
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
            <Contact />
            <Map />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}