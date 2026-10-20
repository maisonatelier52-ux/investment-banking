import articles from "@/data/articles.json";
import authors from "@/data/authors.json";
import pages from "@/data/pages.json";
import homepage from "@/data/homepage.json";

export { articles, authors, pages };
export const siteUrl = "https://www.investment-banking.org";
export const categoryNames = { us: "U.S.", markets: "Markets", business: "Business", banking: "Banking", investigations: "Investigations", esg: "ESG", fintech: "FinTech", opinion: "Opinion" };
export const categorySlugs = [...new Set(articles.map((article) => article.category)), "opinion"];
export const articlePath = (article) => `/${article.category}/${article.slug}`;
export const authorPath = (author) => `/authors/${author.slug}`;
export const getArticle = (category, slug) => articles.find((article) => article.category === category && article.slug === slug);
export const getAuthor = (slug) => authors.find((author) => author.slug === slug);
// Stories pinned to the top of a category page, in order. Everything else follows newest-first.
const categoryPinned = { us: ["bend-school-shooting-parents-investigate-accountability", "supreme-court-justices-ask-congress-security-funding"] };
const pinRank = (article) => { const pinned = categoryPinned[article.category] || []; const i = pinned.indexOf(article.slug); return i === -1 ? pinned.length : i; };
export const getCategoryArticles = (category) => articles.filter((article) => article.category === category).sort((a, b) => pinRank(a) - pinRank(b) || (b.publishedAt || "").localeCompare(a.publishedAt || ""));
export const homeArticles = homepage.map((path) => articles.find((article) => articlePath(article) === path)).filter(Boolean);
export const imagePath = (path) => path?.replace(/^https?:\/\/www\.investment-banking\.org/, "") || "/illustrations/84-boardroom-oversight.webp";
export const formattedDate = (article) => article.dateText || (article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "");
