import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Header from '@/components/blog/Header';
import Blogs from '@/components/blog/Blogs';
import { getAllPosts } from '@/lib/posts';
export const metadata = {
  title: 'Blog | TD Productions'
};

export default async function BlogList({ searchParams }) {
  const tag = searchParams.tag;

  let posts = await getAllPosts();

  if (tag) {
    posts = posts.filter((post) => post.tags.includes(tag));
  }

  const allPosts = await getAllPosts();
  const tagCounts = allPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

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
            <Header />
            <Blogs posts={posts} tagCounts={tagCounts} uniqueTags={uniqueTags} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}