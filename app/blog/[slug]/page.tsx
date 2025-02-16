import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlug, getAllPosts } from '@/lib/posts';
import ClientBlogPostPage from '@/components/blog-details/ClientBlogPostPage';
import React from 'react';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Metadata = {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    url: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  alternates?: {
    canonical: string;
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  if (!post) notFound();

  return {
    title: post.title,
    description: post.content.substring(0, 160), // Limit description to 160 characters
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      url: `/blog/${slug}`,
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
      description: post.content.substring(0, 160),
      images: [post.coverImage],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) notFound();

    const allPosts = await getAllPosts();
    const latestPosts = allPosts.slice(0, 3);

    return <ClientBlogPostPage post={post} latestPosts={latestPosts} />;
}
