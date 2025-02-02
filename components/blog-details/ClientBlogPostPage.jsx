'use client';

import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/blog-details/Header';
import Blog from '@/components/blog-details/Blog';

export default function ClientBlogPostPage({ post, latestPosts }) {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg">
            <Header
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