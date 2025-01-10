import { notFound } from "next/navigation";
import { getMemberBySlug, getAllSlugs } from "@/lib/nas-tym";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Intro from "@/components/nas-tym-detail/Intro";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ member: slug }));
}

export async function generateMetadata({ params }) {
  const { member } = await params;
  const data = getMemberBySlug(member);
  return {
    title: data ? `${data.name} | TD Productions` : "Náš tým | TD Productions",
  };
}

export default async function MemberPage({ params }) {
  const { member } = await params;
  const memberData = getMemberBySlug(member);

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
            <Intro memberData={memberData} />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}