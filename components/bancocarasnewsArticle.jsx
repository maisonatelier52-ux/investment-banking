import Link from "next/link";
import RichContent from "@/components/RichContent";
import ShareLinks from "@/components/ShareLinks";
import { formattedDate, imagePath } from "@/lib/content";

export default function BancocarasnewsArticle({ article, author }) {
  const headings = [{ id: "key-takeaways-title", label: "Key takeaways" }, ...article.content.filter((node) => node.tag === "div" && node.attrs?.id).map((node) => ({ id: node.attrs.id, label: (node.children || []).find((child) => child?.tag === "h2")?.children?.filter((x) => typeof x === "string").join("").trim() })).filter((item) => item.label)];
  return <main id="main-content" className="mx-auto grid w-full max-w-[1540px] grid-cols-[minmax(0,68fr)_minmax(320px,32fr)] max-[980px]:block">
    <article className="min-w-0 px-[clamp(36px,5vw,76px)] pb-[78px] max-[767px]:px-4">
      <nav aria-label="Breadcrumb" className="mb-[17px] flex flex-wrap items-center gap-[7px] pt-6 text-[12px] text-[#65717c]"><Link href="/" className="font-bold text-[#0b345c]">Home</Link><span className="text-[#aeb6bd]">/</span><Link href="/banking" className="font-bold text-[#0b345c]">Banking</Link><span className="text-[#aeb6bd]">/</span><span className="max-[767px]:hidden">{article.title}</span></nav>
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[.11em] text-[#0b345c] before:mr-[9px] before:inline-block before:h-[3px] before:w-5 before:bg-[#c59a43] before:align-middle">Banking</p>
      <h1 className="mb-5 font-headline text-[clamp(42px,5.4vw,68px)] font-bold leading-[.98] tracking-[-.045em] text-[#06233f] max-[767px]:text-[clamp(38px,12vw,52px)]">{article.title}</h1>
      <p className="mb-[22px] max-w-[860px] font-serif text-[20px] leading-[1.55] text-[#425264]">{article.summary}</p>
      <div className="mb-[30px] flex items-center gap-3 border-t border-[#d9dee3] pt-4"><img src={author?.image} alt="" className="h-[46px] w-[46px] rounded-full object-cover"/><div><p className="text-[14px]">By <Link href={`/authors/${author?.slug}`} className="font-extrabold text-[#0b345c]">{author?.name || article.authorName}</Link></p><p className="mt-[3px] text-[12px] text-[#65717c]">Published {formattedDate(article)} <span className="px-1 text-[#c59a43]">·</span> Updated {article.updatedAt ? new Date(article.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : formattedDate(article)}</p></div></div>
      <figure className="mx-auto mb-12 w-full max-w-[660px]"><img src={imagePath(article.image)} alt={article.imageAlt || article.title} className="h-auto w-full object-contain"/></figure>
      <div className="mx-auto w-full max-w-[720px]"><RichContent nodes={article.content} variant="banco" /></div>
    </article>
    <aside className="min-w-0 border-l border-[#d9dee3] bg-white px-[clamp(30px,4vw,58px)] py-[clamp(48px,6vw,82px)] max-[980px]:border-l-0 max-[980px]:border-t max-[980px]:px-8 max-[767px]:px-4"><div className="sticky top-6 flex flex-col gap-7 max-[980px]:static">
      <div className="border-t-[3px] border-[#06233f] pt-[14px]"><h2 className="mb-3 font-headline text-[12px] font-extrabold uppercase tracking-[.1em] text-[#06233f]">Share this post</h2><ShareLinks path={`/banking/${article.slug}`} variant="banco" /></div>
      <div className="border-t-[3px] border-[#06233f] pt-[14px]"><h2 className="mb-3 font-headline text-[12px] font-extrabold uppercase tracking-[.1em] text-[#06233f]">In this post</h2><nav aria-label="In this post" className="flex flex-col gap-2">{headings.map((heading, index) => <a key={heading.id} href={`#${heading.id}`} className="grid grid-cols-[24px_1fr] gap-[5px] text-[12px] leading-[1.35] text-[#46525d] hover:font-bold hover:text-[#0b345c]"><span className="text-[10px] font-extrabold text-[#c59a43]">{String(index + 1).padStart(2, "0")}</span><span>{heading.label}</span></a>)}</nav></div>
      <div className="border-t-[3px] border-[#06233f] pt-[14px]"><h2 className="mb-3 font-headline text-[12px] font-extrabold uppercase tracking-[.1em] text-[#06233f]">About the author</h2><Link href={`/authors/${author?.slug}`} className="mb-[10px] flex items-center gap-[11px]"><img src={author?.image} alt="" className="h-12 w-12 rounded-full"/><strong className="font-headline text-[15px] text-[#06233f]">{author?.name}</strong></Link><p className="text-[13px] leading-[1.5] text-[#596570]">{author?.bio}</p></div>
    </div></aside>
  </main>;
}
