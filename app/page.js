import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Feat from '@/components/home/Feat';
import Marq from '@/components/common/Marq';
import Navbar from '@/components/common/Navbar';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home-main/Portfolio';
import Team from '@/components/home-creative-agency/Team';
import Testimonials from '@/components/home-main/Testimonials';
import Clients from '@/components/home/Clients';
import Blog from '@/components/home/Blog';
import Header from '@/components/home/Header';
import About from '@/components/home/About';
import { getAllPosts } from '@/lib/posts';
import { getMemberList } from "@/lib/nas-tym";
import { getLightServices } from '@/lib/nase-sluzby';

export const metadata = {
  title: 'TD Productions'
};

export default async function Home() {
  const posts = await getAllPosts();
  const members = getMemberList();
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
            <Marq />
            <About />
            <Services services={services} />
            {/* <Portfolio /> */}
            <Feat />
            <Team members={members} />
            {/* <Testimonials /> */}
            {/* <Clients /> */}
            <Blog posts={posts} />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
