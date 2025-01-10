import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Services from "@/components/nase-sluzby/Services";
import Faq from "@/components/nase-sluzby/Faq";
import Testimonials from "@/components/home-main/Testimonials";
import Header from "@/components/nase-sluzby/Header";
import Numbers from "@/components/nase-sluzby/Numbers";
import { getLightServices } from '@/lib/nase-sluzby';

export const metadata = {
  title: "Naše služby | TD Productions"
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
