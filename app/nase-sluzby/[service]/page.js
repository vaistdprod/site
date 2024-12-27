import { notFound } from "next/navigation";
import services from "@/data/nase-sluzby.json";

import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";

import Header from "@/components/nase-sluzby-sluzba/Header";
import Intro from "@/components/nase-sluzby-sluzba/Intro";
import Feat from "@/components/nase-sluzby-sluzba/Feat";
import Intro2 from "@/components/home-digital-agency/Intro2";

export async function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const serviceData = services[service];
  return {
    title: serviceData
      ? `${serviceData.heading} | TD Productions`
      : "Naše služby | TD Productions",
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
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
