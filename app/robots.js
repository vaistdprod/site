export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      sitemap: "https://tdprod.cz/sitemap.xml",
    }
  }