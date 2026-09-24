import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/content";

export const metadata = { title: "Search articles", robots: { index: false, follow: true } };
export default function SearchPage({ searchParams }) {
  const query = (searchParams?.q || "").trim().toLowerCase();
  const results = query ? articles.filter((article) => [article.title, article.description, article.categoryName, article.authorName, JSON.stringify(article.content)].some((value) => value?.toLowerCase().includes(query))) : [];
  return <main id="main-content" className="mx-auto min-h-[60vh] max-w-[1180px] px-5 py-10"><nav aria-label="Breadcrumb" className="mb-6 text-xs text-muted"><Link href="/">Home</Link><span className="px-2">/</span><span>Search</span></nav><h1 className="mb-6 text-4xl font-extrabold">Search articles</h1><form action="/search" method="get" className="mb-8 flex max-w-[650px] gap-2"><input name="q" defaultValue={searchParams?.q || ""} placeholder="Search articles" aria-label="Search articles" className="min-w-0 flex-1 border border-slate-300 px-4 py-3 outline-none focus:border-gold"/><button type="submit" className="bg-ink px-6 py-3 font-bold text-white">Search</button></form>{query && <p className="mb-5 text-sm text-muted">{results.length} {results.length === 1 ? "result" : "results"} for “{searchParams.q}”</p>}<div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3">{results.map((article) => <ArticleCard key={article.slug} article={article} />)}</div></main>;
}
