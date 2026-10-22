"use client";

import { useState } from "react";
import Link from "next/link";
import articles from "@/data/articles.json";

const names = { us: "U.S", markets: "Markets", business: "Business", banking: "Banking", investigations: "Investigations", esg: "ESG", fintech: "FinTech", opinion: "Opinion" };
const categories = [...new Set([...articles.map((article) => article.category), "opinion"])];
const tickerStories = [
  articles.find((article) => article.slug === "britannia-strengthens-board-lord-stanley-fink-chairman"),
  articles.find((article) => article.slug === "todd-blanche-rescinds-trump-anti-weaponization-fund-ag-nomination"),
  articles.find((article) => article.slug === "banco-caracas-julio-herrera-velutini-banking-legacy"),
].filter(Boolean);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return <>
    <a href="#main-content" className="sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:block focus:bg-[#06233f] focus:px-4 focus:py-3 focus:text-white">Skip to main content</a>
    <header className="border-b border-[#d9dee3] bg-white">
      <div className="relative mx-auto flex min-h-[90px] w-[calc(100%-48px)] max-w-[1200px] items-center justify-between py-[13px] max-[767px]:min-h-[78px] max-[767px]:w-[calc(100%-32px)] max-[767px]:py-3">
        <button type="button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[1px] border border-[#aeb7bf] bg-white text-[#78848e] hover:text-[#06233f]"><span className="text-[18px] leading-none">☰</span></button>
        <Link href="/" className="absolute left-1/2 -translate-x-1/2"><img src="/assets/branding/investment-banking-logo.png" alt="Investment Banking" className="block h-auto w-[300px] max-w-[46vw] max-[767px]:w-[238px] max-[767px]:max-w-[62vw]" /></Link>
        <button type="button" aria-label="Search" aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)} className="z-10 flex h-[30px] w-[30px] items-center justify-center text-[#65717c] hover:text-[#06233f]"><svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 5 5"/></svg></button>
        {searchOpen && <form action="/search" method="get" className="absolute right-0 top-[70px] z-50 flex w-[min(420px,calc(100vw-32px))] gap-2 border border-[#d9dee3] bg-white p-3 shadow-xl"><input name="q" autoFocus aria-label="Search articles" placeholder="Search articles" className="min-w-0 flex-1 border border-[#d9dee3] px-3 py-2 text-sm outline-none focus:border-[#c59a43]"/><button type="submit" className="bg-[#06233f] px-4 py-2 text-xs font-bold text-white">Search</button></form>}
        {menuOpen && <nav aria-label="Menu" className="absolute left-0 top-[70px] z-50 flex w-[260px] flex-col border border-[#d9dee3] bg-white p-4 text-sm shadow-xl"><Link href="/" onClick={() => setMenuOpen(false)} className="border-b py-2">Home</Link>{categories.map((category) => <Link key={category} href={`/${category}`} onClick={() => setMenuOpen(false)} className="border-b py-2">{names[category]}</Link>)}<Link href="/about" onClick={() => setMenuOpen(false)} className="py-2">About</Link></nav>}
      </div>
    </header>
    <nav aria-label="Primary navigation" className="border-b border-[#d9dee3] bg-white max-[767px]:hidden"><div className="mx-auto flex min-h-[46px] w-[calc(100%-48px)] max-w-[1200px] items-stretch justify-center text-[12px] font-bold tracking-[.025em] text-[#111820]"><Link href="/" className="flex items-center bg-[#f5f6f7] px-4 hover:text-[#0b345c]">Home</Link>{categories.map((category) => <Link key={category} href={`/${category}`} className="flex items-center px-4 hover:text-[#0b345c]">{names[category]}</Link>)}</div></nav>
    <div className="relative overflow-hidden border-b-[3px] border-[#c59a43] bg-[#06233f] text-white"><div className="h-[42px] overflow-hidden px-[max(24px,calc((100vw-1200px)/2))] max-[767px]:h-[38px] max-[767px]:px-4"><div className="flex h-full w-max animate-ticker items-center whitespace-nowrap hover:[animation-play-state:paused]">{[0,1].map((copy) => <div key={copy} className="flex shrink-0 items-center">{tickerStories.map((story) => <div key={story.slug} className="flex items-center"><Link href={`/${story.category}/${story.slug}`} className="flex items-center gap-3 text-[12px] max-[767px]:text-[11px]"><strong className="bg-[#c59a43] px-[11px] py-[3px] font-headline text-[10px] font-extrabold uppercase tracking-[.09em] text-[#06233f]">{names[story.category]}</strong><span className="text-[#f1f4f6]">{story.homeTitle || story.title}</span></Link><span className="mx-6 h-[17px] w-px bg-white/40"/></div>)}</div>)}</div></div></div>
  </>;
}
