import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/Cursor';
import LoadingScreen from '../../components/common/LoadingScreen';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Intro from '@/components/blog/Intro';
import Blogs from '@/components/blog/Blogs';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | TD Productions',
};

export default async function BlogList({ searchParams }) {
  const tag = searchParams.tag;
  const searchQuery = searchParams.search;

  let posts = await getAllPosts();

  if (tag) {
    posts = posts.filter((post) => post.tags.includes(tag));
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
    );
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
            <Intro />
            {posts.length > 0 ? (
              <Blogs posts={posts} tagCounts={tagCounts} uniqueTags={uniqueTags} />
            ) : (
              <div className="no-results mt-80 text-center">
                <h3>Nenalezeny žádné výsledky obsahující "{searchQuery}".</h3>
              </div>
            )}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}