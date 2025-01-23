import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import parse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import authors from './authors';
import remarkAddClasses from './remarkAddClasses';

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

  const processedContent = await unified()
    .use(parse)
    .use(remarkAddClasses)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  const author = authors[data.authorId];
  if (!author) {
    throw new Error(`Autor s ID '${data.authorId}' nenalezen.`);
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
    keywords: data.keywords || [],
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