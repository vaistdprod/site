import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '../../../components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Construction from '@/components/common/Construction';

export async function generateStaticParams() {
  return [];
}

export default async function ProjectDetail({ params }) {
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
            <Construction />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}