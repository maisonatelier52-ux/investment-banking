import { siteUrl } from "@/lib/content";
export default function robots() { return { rules: [{ userAgent: "*", allow: "/", disallow: "/search" }], sitemap: `${siteUrl}/sitemap.xml` }; }
