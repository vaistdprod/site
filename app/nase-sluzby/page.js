import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from "@/components/common/Loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Services from "@/components/home-personal/Services";
import Intro2 from "@/components/home-digital-agency/Intro2";
import Testimonials from "@/components/home-main/Testimonials";
import Header from "@/components/nase-sluzby/Header";
import Numbers from "@/components/common/Numbers";

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
            <Numbers />
            <Services />
            {/* <Intro2 /> */}
            {/* <Testimonials /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}