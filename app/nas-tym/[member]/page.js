import { notFound } from "next/navigation";
import members from "@/data/members.json";

import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/cusor";
import LoadingScreen from "@/components/common/loader";
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";

import Header from "@/components/page-team-details/Header";
import Intro from "@/components/page-team-details/Intro";
import Services from "@/components/page-team-details/Services";

export async function generateStaticParams() {
  return Object.keys(members).map((slug) => ({ member: slug }));
}

export function generateMetadata({ params }) {
  const data = members[params.member];
  return {
    title: data ? `TD Productions | ${data.name}` : "TD Productions"
  };
}

export default function MemberPage({ params }) {
  const { member } = params;
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