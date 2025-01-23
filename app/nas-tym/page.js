import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Team from '@/components/home/Team';
import Header from '@/components/team/Header';
// import Outro from '@/components/team/Outro';
import Intro from '@/components/team/Intro';
import Numbers from '@/components/common/Numbers';
import { getMemberList } from "@/lib/team";

export const metadata = {
  title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
  description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
  keywords: [
    'Matěj Vais',
    'Martin Studnický',
    'Matyáš Vaněk',
    'Sebastian Vaněk',
    'Matěj Turek',
    'kdo je td productions',
    'co je td productions'
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/nas-tym",
    title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
    description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tým marketingové agentury TD Productions."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
    description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/nas-tym"
  }
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
            <Intro />
            <Numbers />
            <Team members={members} />
            {/* <Intro2 /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}