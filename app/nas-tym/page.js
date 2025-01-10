import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Team from '@/components/home-creative-agency/Team';
import Numbers from '@/components/common/Numbers';
import Header from '@/components/nas-tym/Header';
import Intro from '@/components/nas-tym/Intro';
import { getMemberList } from "@/lib/nas-tym";

export const metadata = {
  title: 'Náš tým | TD Productions'
};

export default function Home() {
const members = getMemberList();

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
            <Team members={members} />
            <Numbers />
            <Intro />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}