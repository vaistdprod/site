import { getAllPosts } from "@/lib/posts"
import { getMemberList } from "@/lib/team"
import { getLightServices } from "@/lib/services"

export default async function sitemap() {
  const baseUrl = "https://tdprod.cz"
  const lastModifiedDate = new Date("2025-01-23T00:00:00.000Z")

  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1.0,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/sluzby/`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/nas-tym/`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/nejcastejsi-dotazy/`,
      changeFrequency: "weekly",
      priority: 0.5,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/portfolio/`,
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/blog/`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/kontakty/`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: lastModifiedDate,
    },
    {
      url: `${baseUrl}/ochrana-osobnich-udaju/`,
      changeFrequency: "weekly",
      priority: 0.5,
      lastModified: lastModifiedDate,
    },
  ]

  const services = getLightServices()
  const serviceRoutes = Object.keys(services).map((key) => ({
    url: `${baseUrl}/sluzby/${key}/`,
    changeFrequency: "weekly",
    priority: 0.7,
    lastModified: lastModifiedDate,
  }))

  const teamMembers = getMemberList()
  const teamRoutes = teamMembers.map((m) => ({
    url: `${baseUrl}/nas-tym/${m.slug}/`,
    changeFrequency: "weekly",
    priority: 0.6,
    lastModified: lastModifiedDate,
  }))

  const allPosts = await getAllPosts()
  const blogRoutes = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    changeFrequency: "weekly",
    priority: 0.6,
    lastModified: lastModifiedDate,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...teamRoutes,
    ...blogRoutes,
  ]
}