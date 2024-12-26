import { notFound } from "next/navigation";
import services from "@/data/services.json";

import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";

import Header from "@/components/page-services-details/Header";
import Intro from "@/components/page-services-details/Intro";
import Feat from "@/components/page-services-details/Feat";
import Intro2 from "@/components/home-digital-agency/Intro2";

export async function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export function generateMetadata({ params }) {
  const serviceData = services[params.service];
  return {
    title: serviceData
      ? `${serviceData.heading} | TD Productions`
      : "Naše služby | TD Productions"
  };
}

export default function ServicePage({ params }) {
  const { service } = params;
  const serviceData = services[service];

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
            <Feat />
            <Intro2 />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
