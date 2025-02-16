import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts';
import ClientBlogPostPage from '@/components/blog-details/ClientBlogPostPage';
import React from 'react';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'TD Productions',
      description: 'Tento článek na našem webu neexistuje. Zkontrolujte prosím URL adresu, případně nám napište, pokud myslíte, že jde o chybu.',
    };
  }

  const dynamicKeywords =
    post.keywords && post.keywords.length > 0
      ? post.keywords
      : ['TD Productions', 'Blog'];

  return {
    title: `${post.title} | TD Productions`,
    description: post.excerpt,
    keywords: dynamicKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tdprod.cz/blog/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://tdprod.cz/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const allPosts = await getAllPosts();
  const latestPosts = allPosts.slice(0, 3);

  return (
    <ClientBlogPostPage post={post} latestPosts={latestPosts} />
  );
}
