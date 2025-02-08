'use client';

import Header from '@/components/blog/Header';
import Blogs from '@/components/blog/blogs/Blogs';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import { useMemo } from 'react';

export default function ClientBlogList({ allPosts, tag, searchQuery }) {
  const tagCounts = useMemo(() => {
    return allPosts.reduce((acc, post) => {
      post.tags.forEach((t) => {
        acc[t] = (acc[t] || 0) + 1;
      });
      return acc;
    }, {});
  }, [allPosts]);

  const uniqueTags = Object.keys(tagCounts);

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
        <main className="main-bg">
          <Header />
          {allPosts.length > 0 ? (
            <Blogs
              posts={allPosts}
              tagCounts={tagCounts}
              uniqueTags={uniqueTags}
              tag={tag}
              searchQuery={searchQuery}
            />
          ) : (
            <div className="no-results mt-80 text-center">
              <h3>
                Nenalezeny žádné výsledky
                {searchQuery ? <> obsahující &quot;{searchQuery}&quot;</> : null}.
              </h3>
            </div>
          )}
        </main>
        <Footer />
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}