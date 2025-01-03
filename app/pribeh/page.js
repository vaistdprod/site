import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/Loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/page-about/Header';
import Intro from '@/components/page-about/Intro';
import Numbers from '@/components/common/Numbers';
import Services from '@/components/page-about/Services';

export const metadata = {
  title: 'Příběh | TD Productions'
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
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
