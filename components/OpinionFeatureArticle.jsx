import Link from "next/link";
import RichContent from "@/components/RichContent";
import ShareLinks from "@/components/ShareLinks";
import { articles, articlePath, formattedDate, imagePath } from "@/lib/content";

// Opinion feature layout: a black photo stage with a white headline sheet rising into it,
// a sticky "record" timeline beside the text, and a portrait that hangs in the right margin.
const display = { fontFamily: '"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif' };
const countWords = (node) => (typeof node === "string" ? node.split(/\s+/).filter(Boolean).length : (node?.children || []).reduce((total, child) => total + countWords(child), 0));

function RecordList({ items }) {
  return <ol className="relative list-none border-l border-[#0b0d10]/30 p-0">
    {items.map((item, index) => <li key={item.date} className="relative pb-6 pl-5 last:pb-0">
      <span aria-hidden="true" className={`absolute -left-[5px] top-[5px] h-[9px] w-[9px] ${index === items.length - 1 ? "bg-[#c59a43]" : "bg-[#0b0d10]"}`} />
      <p className="font-sans text-[12px] font-bold text-[#0b0d10]">{item.date}</p>
      <p className="mt-1 font-sans text-[13.5px] leading-[1.5] text-[#46525d]">{item.text}</p>
    </li>)}
  </ol>;
}

export default function OpinionFeatureArticle({ article, author }) {
  const record = article.record || [];
  const minutes = Math.max(1, Math.round((article.content || []).reduce((total, node) => total + countWords(node), 0) / 230));
  const related = (article.relatedPaths || []).map((path) => articles.find((item) => articlePath(item) === path)).filter(Boolean);
  const path = articlePath(article);

  return <main id="main-content" className="bg-white">
    {/* Stage */}
    <section aria-label="Opinion header image" className="bg-black">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 pb-2 pt-4 text-[12px] text-white/70 max-[640px]:px-4">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true" className="text-white/30">/</span>
          <Link href="/opinion" className="font-bold text-[#c59a43] hover:text-white">Opinion</Link>
        </nav>
        <span className="text-white/45">Photo illustration</span>
      </div>
      <figure className="m-0">
        <img src={imagePath(article.image)} alt={article.imageAlt || ""} width="1600" height="800" className="mx-auto block h-auto w-full max-w-[1280px] max-[640px]:aspect-[4/3] max-[640px]:object-cover" />
      </figure>
    </section>

    {/* Headline sheet */}
    <div className="relative z-10 mx-auto -mt-[150px] max-w-[980px] px-6 max-[900px]:-mt-[90px] max-[640px]:-mt-9 max-[640px]:px-0">
      <header className="border-t-[5px] border-[#c59a43] bg-white px-[clamp(20px,5vw,64px)] pb-9 pt-9 max-[640px]:pt-7">
        <Link href="/opinion" className="inline-flex items-center gap-[10px] font-sans text-[14px] font-bold text-[#8a6a22] before:h-[3px] before:w-6 before:bg-[#c59a43]">Opinion</Link>
        <h1 style={display} className="mb-5 mt-4 text-[clamp(34px,5.2vw,62px)] font-semibold leading-[1.05] tracking-[-.02em] text-[#0b0d10]">{article.title}</h1>
        <p className="max-w-[780px] font-serif text-[clamp(19px,2vw,23px)] leading-[1.5] text-[#3b444d]">{article.summary}</p>
        <div className="mt-8 flex items-center gap-3 border-t border-[#d9dee3] pt-5">
          <img src={author?.image} alt="" className="h-11 w-11 rounded-full object-cover" />
          <div className="font-sans">
            <p className="text-[14px]">By <Link href={`/authors/${author?.slug || article.authorSlug}`} className="font-bold text-[#0b0d10] hover:underline">{author?.name || article.authorName}</Link></p>
            <p className="mt-[3px] flex flex-wrap items-center gap-x-3 text-[12px] text-[#65717c]"><time dateTime={article.publishedAt}>{formattedDate(article)}</time><span aria-hidden="true" className="h-3 w-px bg-[#c4cbd1]" /><span>{minutes} min read</span></p>
          </div>
        </div>
      </header>
    </div>

    {/* Body */}
    <div className="mx-auto grid max-w-[1288px] grid-cols-[minmax(0,1fr)] gap-x-10 px-6 pb-20 pt-8 min-[900px]:grid-cols-[200px_minmax(0,680px)] min-[900px]:justify-center min-[1320px]:grid-cols-[220px_680px_260px] max-[640px]:px-4 max-[640px]:pb-14">
      {/* Phones and tablets: the record becomes a swipeable strip */}
      {record.length > 0 && <section aria-labelledby="record-strip-title" className="mb-8 min-w-0 min-[900px]:hidden">
        <h2 id="record-strip-title" style={display} className="mb-3 text-[20px] font-bold text-[#0b0d10]">The record</h2>
        <ol className="-mx-4 flex list-none snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-3 min-[641px]:-mx-6 min-[641px]:scroll-px-6 min-[641px]:px-6">
          {record.map((item) => <li key={item.date} className="min-w-[236px] max-w-[236px] snap-start border border-[#d9dee3] border-t-[3px] border-t-[#0b0d10] bg-white p-3 font-sans">
            <p className="text-[12px] font-bold text-[#0b0d10]">{item.date}</p>
            <p className="mt-1 text-[13px] leading-[1.5] text-[#46525d]">{item.text}</p>
          </li>)}
        </ol>
        <p className="mt-1 text-[12px] text-[#65717c]">As this piece lays out the record.</p>
      </section>}

      {/* Desktop: sticky rail */}
      <aside className="hidden self-start min-[900px]:sticky min-[900px]:top-8 min-[900px]:block">
        {record.length > 0 && <section aria-labelledby="record-title" className="mb-8">
          <h2 id="record-title" style={display} className="text-[22px] font-bold leading-tight text-[#0b0d10]">The record</h2>
          <p className="mb-5 mt-1 font-sans text-[12px] text-[#65717c]">As this piece lays it out</p>
          <RecordList items={record} />
        </section>}
        <section aria-labelledby="share-title" className="border-t border-[#d9dee3] pt-4">
          <h2 id="share-title" className="mb-3 font-sans text-[13px] font-bold text-[#0b0d10]">Share this piece</h2>
          <ShareLinks path={path} />
        </section>
      </aside>

      <article className="min-w-0 min-[1320px]:col-start-2">
        <RichContent nodes={article.content} variant="opinion" />

        <div className="clear-both" />

        <aside aria-labelledby="opinion-note-title" className="mt-14 border-t-[3px] border-[#0b0d10] pt-5">
          <h2 id="opinion-note-title" style={display} className="text-[20px] font-bold text-[#0b0d10]">About this opinion piece</h2>
          <p className="mt-2 font-sans text-[14px] leading-[1.65] text-[#46525d]">This is an opinion piece. It reflects the views of the author, not necessarily those of Investment Banking as a whole. People named in it can respond under our <Link href="/right-of-reply-policy" className="font-bold text-[#0b345c] underline underline-offset-2">right of reply policy</Link>, and our <Link href="/editorial-policy" className="font-bold text-[#0b345c] underline underline-offset-2">editorial policy</Link> explains how we label opinion.</p>
        </aside>

        <section aria-labelledby="author-title" className="mt-10 flex items-start gap-4 border-t border-[#d9dee3] pt-6">
          <img src={author?.image} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
          <div className="font-sans">
            <h2 id="author-title" className="text-[13px] font-bold text-[#65717c]">About the author</h2>
            <Link href={`/authors/${author?.slug || article.authorSlug}`} className="mt-1 block text-[17px] font-bold text-[#0b0d10] hover:underline">{author?.name || article.authorName}</Link>
            <p className="mt-1 text-[14px] leading-[1.6] text-[#46525d]">{author?.bio}</p>
          </div>
        </section>

        <div className="mt-8 min-[900px]:hidden">
          <h2 className="mb-3 font-sans text-[13px] font-bold text-[#0b0d10]">Share this piece</h2>
          <ShareLinks path={path} />
        </div>

        {related.length > 0 && <section aria-labelledby="related-title" className="mt-12 border-t-[3px] border-[#0b0d10] pt-5">
          <h2 id="related-title" style={display} className="mb-4 text-[20px] font-bold text-[#0b0d10]">Related reading</h2>
          {related.map((item) => <Link key={item.slug} href={articlePath(item)} className="group grid grid-cols-[96px_minmax(0,1fr)] items-center gap-4 max-[420px]:grid-cols-[80px_minmax(0,1fr)]">
            <img src={imagePath(item.image)} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <span className="block min-w-0"><span className="block font-sans text-[12px] font-bold text-[#8a6a22]">{item.categoryName}</span><span className="mt-1 block font-headline text-[17px] font-bold leading-[1.25] text-[#0b0d10] group-hover:text-[#0b345c]">{item.title}</span></span>
          </Link>)}
        </section>}


      </article>
    </div>
  </main>;
}
