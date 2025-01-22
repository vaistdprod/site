import { getAllPosts } from '@/lib/posts';
import ClientBlogList from '@/components/blog/ClientBlogList';

export const metadata = {
  title: "Blog | TD Productions | Posouváme hranice digitální inovace",
  description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
  keywords: [
    'TD Productions',
    'webové stránky Ostrava',
    'webové aplikace Ostrava',
    'web design Ostrava',
    'digitální marketing Ostrava',
    'weby Ostrava',
    'marketingová agentura Ostrava',
    'web na míru Ostrava',
    'tvorba webových stránek ostrava',
    'tvorba webu na míru ostrava',
  ],
  openGraph: {
    type: "website",
    url: "https://tdprod.cz/blog",
    title: "Blog | TD Productions | Posouváme hranice digitální inovace",
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
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
    description: "Pokrýváme digitální marketing, vývoj webů i AI řešení. Vylaďte svoje podnikání s TD Productions a nastartujte rok 2025 naplno. Kontaktujte nás ještě dnes.",
    images: ["https://tdprod.cz/assets/imgs/og-image.jpg"]
  },
  alternates: {
    canonical: "https://tdprod.cz/blog"
  }
};

export default async function BlogPage({ searchParams }) {
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
