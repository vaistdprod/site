import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import parse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

import authors, { Author } from './authors';

// Define a Post interface
export interface Post {
slug: string;
title: string;
date: string;
author: Author;
tags: string[];
excerpt: string;
coverImage: string;
comments: number;
keywords: string[];
content: string;
}

let cachedPosts: Post[] | null = null;
const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllSlugs(): string[] {
const fileNames = fs.readdirSync(postsDirectory);
return fileNames.map((fileName) => fileName.replace(/.md$/, ''));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
const fullPath = path.join(postsDirectory, `${slug}.md`);
if (!fs.existsSync(fullPath)) {
return null;
}

const fileContents = fs.readFileSync(fullPath, 'utf8');
const { data, content } = matter(fileContents);

const processedContent = await unified()
.use(parse)
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

export async function getAllPosts(): Promise<Post[]> {
if (cachedPosts) {
return cachedPosts;
}

const slugs = getAllSlugs();
const postsOrNull = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

// Filter out any null values
const posts: Post[] = postsOrNull.filter((post): post is Post => post !== null);

// Compare dates by converting them to a timestamp
const sortedPosts = posts.sort((a, b) => {
return new Date(b.date).getTime() - new Date(a.date).getTime();
});

cachedPosts = sortedPosts;
return sortedPosts;
}
