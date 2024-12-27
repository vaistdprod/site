// app/portfolio/[id]/page.js

import { notFound } from 'next/navigation';
import portfolioData from '@/data/portfolioData.json';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cusor';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/project-details/Header';
import Challenge from '@/components/project-details/Challenge';
import Works from '@/components/project-details/Works';
import Solution from '@/components/project-details/Solution';
import Works2 from '@/components/project-details/Works2';
import Next from '@/components/project-details/Next';

export async function generateStaticParams() {
  return portfolioData.projects.map((proj) => ({ id: proj.id }));
}

export default async function ProjectDetail({ params }) {
  // Next 15 wants asynchronous access:
  const { id } = await params;

  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header data={project} />
            <Challenge data={project} />
            <Works data={project} />
            <Solution data={project} />
            <Works2 data={project} />
            <Next data={project} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
