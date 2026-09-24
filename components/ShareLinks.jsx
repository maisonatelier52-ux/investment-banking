"use client";
import { useState } from "react";

export default function ShareLinks({ path, variant = "round" }) {
  const [copied, setCopied] = useState(false);
  const url = `https://www.investment-banking.org${path}`;
  const encoded = encodeURIComponent(url);
  const items = [
    ["X", `https://twitter.com/intent/tweet?url=${encoded}`, "X"],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, "f"],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, "in"],
    ["Instagram", "https://www.instagram.com/investment_.banking/", "◎"]
  ];
  async function copy() { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  if (variant === "banco") return <div className="flex flex-wrap gap-2"><a href={items[0][1]} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[38px] items-center justify-center border border-[#d9dee3] px-[11px] text-[11px] font-extrabold text-[#0b345c] hover:border-[#c59a43]">Share</a><button type="button" onClick={copy} className="inline-flex min-h-[38px] items-center justify-center border border-[#d9dee3] px-[11px] text-[11px] font-extrabold text-[#0b345c] hover:border-[#c59a43]">{copied ? "Copied!" : "Copy link"}</button><a href={items[2][1]} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="inline-flex min-h-[38px] items-center justify-center border border-[#d9dee3] px-[11px] text-[11px] font-extrabold text-[#0b345c] hover:border-[#c59a43]">in</a></div>;
  return <div className="flex flex-wrap gap-2">{items.map(([label, href, glyph]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-ink hover:border-gold">{glyph}</a>)}<button type="button" onClick={copy} aria-label="Copy article link" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-ink hover:border-gold">{copied ? "✓" : "↗"}</button></div>;
}
