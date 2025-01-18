'use client';

import Intro from '@/components/blog/Intro';
import Blogs from '@/components/blog/Blogs';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import { useMemo } from 'react';

export default function ClientBlogList({ allPosts, tag, searchQuery }) {
  // We already have the final, filtered posts from the server.
  // No need to re-filter, but if you want to do something else, you can.

  // If you still want to compute tagCounts for UI, do it here:
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
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Intro />
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
                  {searchQuery ? <> obsahující "{searchQuery}"</> : null}.
                </h3>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
