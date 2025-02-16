'use client';

import ProgressScroll from '@/components/common/progress-scroll/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loading-screen/LoadingScreen';
import Footer from '@/components/common/footer/Footer';
import Navbar from '@/components/common/navbar/Navbar';
import Header from '@/components/blog-details/Header';
import Blog from '@/components/blog-details/blog/Blog';
import SmoothScrollProvider from '@/components/common/smooth-scroll/SmoothScrollProvider';
import React from 'react';
import { Post } from '@/lib/posts';

export default function ClientBlogPostPage({
  post,
  latestPosts,
}: {
  post: Post;
  latestPosts: Post[];
}) {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <SmoothScrollProvider>
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
      </SmoothScrollProvider>
      <ProgressScroll />
    </>
  );
}
