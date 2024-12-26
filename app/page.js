import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Feat from '@/components/home-main/Feat';
import Marq from '@/components/home-personal/Marq';
import Navbar from '@/components/common/Navbar';
import Services from '@/components/home-personal/Services';
import Portfolio from '@/components/home-main/Portfolio';
import Team from '@/components/home-main/Team';
import Testimonials from '@/components/home-main/Testimonials';
import Clients from '@/components/home-main/Clients';
import Blog from '@/components/home-creative-agency/Blog';
import Header from '@/components/home-personal/Header';
import About from '@/components/home-personal/About';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'TD Productions'
};

export default async function Home() {
  const posts = await getAllPosts();

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
            <Services />
            {/* <Portfolio /> */}
            <Feat />
            <Team />
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