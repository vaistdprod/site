import { notFound } from "next/navigation";
import servicesDetails from "@/data/nase-sluzby-detail";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '../../../components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/nase-sluzby-detail/Header";
import Intro from "@/components/nase-sluzby-detail/Intro";
import Feat from "@/components/nase-sluzby-detail/Feat";
import Intro2 from "@/components/nase-sluzby-detail/Intro2";

export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = params;
  const serviceData = servicesDetails[service];
  return {
    title: serviceData
      ? `${serviceData.title} | TD Productions`
      : "Naše služby | TD Productions",
  };
}

export default async function ServicePage({ params }) {
  const { service } = params;
  const serviceData = servicesDetails[service];

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
            <Intro2 serviceData={serviceData} />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}