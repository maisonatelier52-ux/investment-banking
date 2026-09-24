import { articles, authors, categorySlugs, pages, siteUrl } from "@/lib/content";

export default function sitemap() {
  const pageRoutes = Object.keys(pages).map((slug) => `/${slug}`);
  return ["/", ...categorySlugs.map((slug) => `/${slug}`), ...articles.map((article) => `/${article.category}/${article.slug}`), ...authors.map((author) => `/authors/${author.slug}`), ...pageRoutes].map((path) => ({ url: siteUrl + path, lastModified: new Date() }));
}
