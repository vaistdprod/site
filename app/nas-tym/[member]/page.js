import { notFound } from "next/navigation";
import members from "@/data/nas-tym-detail";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Header from "@/components/nas-tym-detail/Header";
import Intro from "@/components/nas-tym-detail/Intro";
import Services from "@/components/nas-tym-detail/Services";

export async function generateStaticParams() {
  return Object.keys(members).map((slug) => ({ member: slug }));
}

export async function generateMetadata({ params }) {
  const { member } = await params;
  const data = members[member];
  return {
    title: data ? `${data.name} | TD Productions` : "Náš tým | TD Productions",
  };
}

export default async function MemberPage({ params }) {
  const { member } = await params;
  const memberData = members[member];

  if (!memberData) return notFound();

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
            <Intro memberData={memberData} />
            <Services />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}