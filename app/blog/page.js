import { getAllPosts } from '@/lib/posts';
import ClientBlogList from '@/components/blog/ClientBlogList';

export const dynamic = 'force-dynamic';
export const metadata = {
  title: "Blog | TD Productions | Posouváme hranice digitální inovace",
  description: "Čtěte novinky a tipy ze světa digitálního marketingu, sociálních médií, tvorby webů a AI řešení od TD Productions.",
  keywords: [
    'blog td productions',
    'marketingové tipy',
    'ai v podnikání'
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/blog",
    title: "Blog | TD Productions | Posouváme hranice digitální inovace",
    description: "Čtěte novinky a tipy ze světa digitálního marketingu, sociálních médií, tvorby webů a AI řešení od TD Productions.",
    images: [
      {
        url: "https://tdprod.cz/assets/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nejnovější novinky ze světa digitálního marketingu vám přináší marketingová agentura TD Productions."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | TD Productions | Posouváme hranice digitální inovace",
    description: "Čtěte novinky a tipy ze světa digitálního marketingu, sociálních médií, tvorby webů a AI řešení od TD Productions.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/blog"
  }
};

export default async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const tag = searchParams?.tag || null;
  const searchQuery = searchParams?.search || null;

  let allPosts = await getAllPosts();

  if (tag) {
    allPosts = allPosts.filter((post) => post.tags.includes(tag));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    allPosts = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
    );
  }

  return (
    <ClientBlogList 
      allPosts={allPosts}
      tag={tag}
      searchQuery={searchQuery}
    />
  );
}