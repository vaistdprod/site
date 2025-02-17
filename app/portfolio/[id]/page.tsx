import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';
import Construction from '@/components/common/static/Construction';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import React from 'react';
import type { PageProps } from '@/types';

interface ProjectProps extends PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [];
}

export default async function ProjectDetail({ params }: ProjectProps) {
  const resolvedParams = await params;
  
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
          <main className="main-bg o-hidden">
            <Construction />
          </main>
          <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}
