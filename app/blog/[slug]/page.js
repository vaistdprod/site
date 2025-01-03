import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/Loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Intro from '@/components/blog-detail/Intro';
import Blog from '@/components/blog-detail/Blog';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts';
import Head from 'next/head';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'TD Productions',
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <>
      <Head>
        <title>{post.title} | TD Productions</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:url" content={`https://tdprod.cz/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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