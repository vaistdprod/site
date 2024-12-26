import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Clients from '@/components/common/Clients';
import Team from '@/components/home-main/Team';
import Testimonials from '@/components/home-modern-studio/Testimonials';
import Header from '@/components/page-about/Header';
import Intro from '@/components/page-about/Intro';
import Numbers from '@/components/page-about/Numbers';
import Services from '@/components/page-about/Services';

export const metadata = {
  title: 'O nás | TD Productions'
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
            <Intro />
            <Numbers />
            <Services />
            <Team />
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
