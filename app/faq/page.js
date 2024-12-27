import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Clients from '@/components/home-main/Clients';
import Testimonials from '@/components/home-creative-agency/Testimonials';
import Header from '@/components/page-FAQ/Header';
import FAQS from '@/components/page-FAQ/FAQS';
import Numbers from '@/components/page-FAQ/Numbers';

export const metadata = {
  title: 'FAQ | TD Productions'
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
            <FAQS />
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