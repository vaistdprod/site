import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Clients from "@/components/common/Clients";
import Services from "@/components/home-main/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-digital-agency/Testimonials";
import Header from "@/components/page-services/Header";
import Numbers from "@/components/page-services/Numbers";

export const metadata = {
  title: "Naše služby | TD Productions"
};

export default function Home() {
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
            <Services />
            <Intro2 />
            <Numbers />
            <Testimonials />
            <Clients />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
