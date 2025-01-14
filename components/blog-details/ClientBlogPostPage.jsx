'use client';

import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Intro from '@/components/blog-details/Intro';
import Blog from '@/components/blog-details/Blog';

export default function ClientBlogPostPage({ post, latestPosts }) {
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
            <Intro
              title={post.title}
              author={post.author}
              date={post.date}
              comments={post.comments}
              coverImage={post.coverImage}
              tags={post.tags}
            />
            <Blog post={post} latestPosts={latestPosts} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}