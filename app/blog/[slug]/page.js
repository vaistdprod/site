import { notFound } from 'next/navigation'
import Lines from '@/components/common/Lines'
import ProgressScroll from '@/components/common/ProgressScroll'
import Cursor from '@/components/common/Cursor'
import LoadingScreen from '@/components/common/LoadingScreen'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Navbar'
import Intro from '@/components/blog-details/Intro'
import Blog from '@/components/blog-details/Blog'
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'TD Productions',
      description: 'Nenalezli jsme tento článek. Zkuste to znovu.',
    }
  }

  return {
    title: `${post.title} | TD Productions`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tdprod.cz/blog/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    },
    alternates: {
      canonical: `https://tdprod.cz/blog/${slug}`
    }
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const allPosts = await getAllPosts()
  const latestPosts = allPosts.slice(0, 3)

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
  )
}