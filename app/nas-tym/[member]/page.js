import { notFound } from "next/navigation";
import { getMemberBySlug, getAllSlugs } from "@/lib/team";
import Lines from "@/components/common/Lines";
import ProgressScroll from "@/components/common/ProgressScroll";
import Cursor from "@/components/common/Cursor";
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from "@/components/common/Footer";
import Marq2 from "@/components/common/Marq2";
import Navbar from "@/components/common/Navbar";
import Intro from "@/components/team-details/Intro";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ member: slug }));
}

export async function generateMetadata({ params }) {
  const { member } = await params;
  const data = getMemberBySlug(member);
  if (!data) {
    return {
      title: "Náš tým | TD Productions | Posouváme hranice digitální inovace",
      description: "Seznamte se s expertním týmem TD Productions. Objevte, kdo stojí za realizací webů a marketingu a zjistěte, jak našim klientům pomáháme k úspěchu.",
    }
  }

  return {
    title: `${data.name} | TD Productions | Posouváme hranice digitální inovace`,
    description: `${data.about}`,
    keywords: [
      data.name,
      "TD Productions",
      "tým",
    ],
    openGraph: {
      type: "profile",
      url: `https://tdprod.cz/nas-tym/${member}`,
      title: `${data.name} | TD Productions | Posouváme hranice digitální inovace`,
      description: `${data.about}`,
      images: [
        {
          url: "https://tdprod.cz/assets/imgs/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${data.about}`,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} | TD Productions | Posouváme hranice digitální inovace`,
      description: `${data.about}`,
      images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
    },
    alternates: {
      canonical: `https://tdprod.cz/nas-tym/${member}`
    }
  }
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