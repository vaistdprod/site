import { notFound } from "next/navigation";
import { getHeavyService } from "@/lib/services";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from "@/components/common/LoadingScreen";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/services-details/Header";
import Intro from "@/components/services-details/Intro";
import Feat from "@/components/services-details/Feat";

export async function generateStaticParams() {
  const lightServices = await import("@/data/mergedServices.json");
  return Object.keys(lightServices.default).map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const serviceData = getHeavyService(service);

  if (!serviceData) {
    return {
      title: "Služby | TD Productions | Posouváme hranice digitální inovace",
      description:
        "Pokrýváme digitální marketing, vývoj webů i AI řešení. Kontaktujte nás ještě dnes a vylaďte svoje podnikání s TD Productions. Sídlíme v Ostravě.",
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
      ]
    };
  }

  const featTitles = serviceData.feat.map((item) => item.title);
  const dynamicKeywords = [
    serviceData.title,
    ...featTitles,
    "TD Productions"
  ];

  return {
    title: `${serviceData.title} | TD Productions`,
    description: `${serviceData.title} v Ostravě, profesionálně a pod hlavičkou expertů. Kontaktujte nás ještě dnes a získejte nabídku.`,
    keywords: dynamicKeywords,
    openGraph: {
      type: "website",
      url: `https://tdprod.cz/nase-sluzby/${service}`,
      title: `${serviceData.title} | TD Productions`,
      description: `${serviceData.title} v Ostravě, profesionálně a pod hlavičkou expertů. Kontaktujte nás ještě dnes a získejte nabídku.`,
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
      description: `${serviceData.title} v Ostravě, profesionálně a pod hlavičkou expertů. Kontaktujte nás ještě dnes a získejte nabídku.`,
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

  if (!serviceData) notFound();

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
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}