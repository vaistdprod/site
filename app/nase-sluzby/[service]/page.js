import { notFound } from "next/navigation";
import { getHeavyService } from "@/lib/nase-sluzby";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/services-details/Header";
import Intro from "@/components/services-details/Intro";
import Feat from "@/components/services-details/Feat";
import Intro2 from "@/components/services-details/Intro2";

export async function generateStaticParams() {
  const lightServices = await import('@/data/mergedServices.json');
  return Object.keys(lightServices.default).map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const serviceData = getHeavyService(service);

  if (!serviceData) {
    return {
      title: "Naše služby | TD Productions",
      description: "Inovace se u nás snoubí s profesionalitou a jednohlasným zájmem posunout váš projekt na tu nejvyšší úroveň. Kontaktujte nás ještě dnes a získejte nabídku."
    };
  }

  return {
    title: `${serviceData.title} | TD Productions`,
    description: `${serviceData.title} v Ostravě. Kontaktujte nás ještě dnes a získejte nabídku.`,
    keywords: [
      serviceData.title,
      'TD Productions',
      'webové stránky Ostrava',
      'webové aplikace Ostrava',
      'web design Ostrava',
      'digitální marketing Ostrava',
      'weby Ostrava',
      'marketingová agentura Ostrava',
      'web na míru Ostrava',
      'tvorba webových stránek ostrava',
    ],
    openGraph: {
      type: "website",
      url: `https://tdprod.cz/nase-sluzby/${service}`,
      title: `${serviceData.title} | TD Productions`,
      description: `${serviceData.title} v Ostravě. Kontaktujte nás ještě dnes a získejte nabídku.`,
      images: [
        {
          url: "https://tdprod.cz/assets/imgs/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${serviceData.title} je jedna služeb, kterou poskytuje marketingová agentura TD Productions.`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceData.title} | TD Productions`,
      description: `${serviceData.title} v Ostravě. Kontaktujte nás ještě dnes a získejte nabídku.`,
      images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
    },
    alternates: {
      canonical: `https://tdprod.cz/nase-sluzby/${service}`
    }
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const serviceData = getHeavyService(service);

  if (!serviceData) return notFound();

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
            <Header serviceData={serviceData} />
            <Intro serviceData={serviceData} />
            <Feat serviceData={serviceData} />
            {/* <Intro2 serviceData={serviceData} /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
