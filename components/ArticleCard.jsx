import Link from "next/link";
import { articlePath, formattedDate, imagePath } from "@/lib/content";

export default function ArticleCard({ article, lead = false, compact = false }) {
  if (!article) return null;
  return <article className={compact ? "grid grid-cols-[minmax(0,1fr)_92px] gap-4 border-t border-slate-200 py-5" : "border-t border-slate-200 py-5"}>
    {!compact && <Link href={articlePath(article)} className="mb-3 block overflow-hidden bg-slate-100"><img src={imagePath(article.image)} alt={article.imageAlt || article.title} loading="lazy" className={lead ? "aspect-[3/2] w-full object-cover" : "aspect-[3/2] w-full object-cover transition-transform hover:scale-[1.02]"}/></Link>}
    <div className="min-w-0"><Link href={`/${article.category}`} className="mb-2 block text-[10px] font-extrabold uppercase tracking-[.16em] text-[#0d5f7c]">{article.categoryName}</Link><h3 className={lead ? "mb-3 text-[26px] font-bold leading-[1.12] text-ink" : compact ? "mb-2 text-[16px] font-bold leading-[1.25] text-ink" : "mb-2 text-xl font-bold leading-[1.2] text-ink"}><Link href={articlePath(article)} className="hover:text-[#0d5f7c]">{article.title}</Link></h3>{!compact && <p className="mb-3 line-clamp-3 text-[14px] leading-[1.55] text-[#667481]">{article.summary}</p>}<p className="text-[11px] text-muted">{formattedDate(article)}{lead && article.authorName ? ` · ${article.authorName}` : ""}</p></div>
    {compact && <Link href={articlePath(article)} className="block"><img src={imagePath(article.image)} alt={article.imageAlt || article.title} loading="lazy" className="h-[80px] w-[92px] object-cover"/></Link>}
  </article>;
}
