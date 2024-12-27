import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Team from '@/components/home-main/Team';
import Numbers from '@/components/nase-sluzby/Numbers';
import Header from '@/components/page-team/Header';
import Intro from '@/components/page-team/Intro';

export const metadata = {
  title: 'Náš tým | TD Productions'
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
            <Team />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}