// lib/posts.js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import authors from './authors'; // Import the authors

let cachedPosts = null;

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Retrieve author details using authorId
  const author = authors[data.authorId];

  if (!author) {
    throw new Error(`Author with ID '${data.authorId}' not found.`);
  }

  return {
    slug,
    title: data.title,
    date: data.date,
    author,
    tags: data.tags,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    comments: data.comments,
    content: contentHtml,
  };
}

export async function getAllPosts() {
  if (cachedPosts) {
    return cachedPosts;
  }

  const slugs = getAllSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  cachedPosts = sortedPosts;
  return sortedPosts;
}