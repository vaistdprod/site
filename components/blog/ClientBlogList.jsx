'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Intro from '@/components/blog/Intro';
import Blogs from '@/components/blog/Blogs';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';

export default function ClientBlogList({ allPosts }) {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  const searchQuery = searchParams.get('search');

  const posts = useMemo(() => {
    let filtered = [...allPosts];
    if (tag) {
      filtered = filtered.filter((p) => p.tags.includes(tag));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [allPosts, tag, searchQuery]);

  // Tag counts
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
            {posts.length > 0 ? (
              <Blogs posts={posts} tagCounts={tagCounts} uniqueTags={uniqueTags} />
            ) : (
              <div className="no-results mt-80 text-center">
                <h3>
                  Nenalezeny žádné výsledky obsahující &quot;{searchQuery}&quot;.
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