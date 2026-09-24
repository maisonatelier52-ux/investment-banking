import { articles, articlePath, imagePath, siteUrl } from "@/lib/content";

export const dynamic = "force-static";
const escape = (value = "") => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
export function GET() {
  const items = [...articles].sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || "")).slice(0, 40).map((article) => `<item><title>${escape(article.title)}</title><link>${siteUrl}${articlePath(article)}</link><guid isPermaLink="true">${siteUrl}${articlePath(article)}</guid><description>${escape(article.description)}</description><pubDate>${article.publishedAt ? new Date(article.publishedAt).toUTCString() : ""}</pubDate><category>${escape(article.categoryName)}</category><enclosure url="${siteUrl}${imagePath(article.image)}" type="image/webp" /></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Investment Banking</title><link>${siteUrl}</link><description>Sourced explainers, case studies, and commentary on banking, markets, and business.</description><language>en-US</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
