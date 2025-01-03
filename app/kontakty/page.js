import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/Loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/kontakty/Header';
import Contact from '@/components/kontakty/Contact';
import Map from '@/components/kontakty/Map';

export const metadata = {
  title: 'Kontakty | TD Productions'
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
            <Contact />
            <Map />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}