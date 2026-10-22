import React from "react";

const base = {
  div: "block", section: "block", aside: "block", nav: "block", span: "inline", small: "text-xs", time: "inline", b: "font-bold", strong: "font-bold", em: "italic", i: "italic", sup: "align-super text-xs", sub: "align-sub text-xs",
  p: "mb-[1.32em] font-serif text-[19px] leading-[1.74] text-[#202830]", h1: "mb-5 font-headline text-[clamp(42px,5.4vw,68px)] font-bold leading-[.98] tracking-[-.045em] text-[#06233f]", h2: "mb-[.68em] mt-[2.1em] border-t-[3px] border-[#c59a43] pt-[13px] font-headline text-[clamp(28px,3vw,34px)] font-bold leading-[1.08] tracking-[-.03em] text-[#06233f]", h3: "mb-3 mt-6 font-headline text-[25px] font-bold text-[#06233f]", h4: "mb-2 mt-5 font-headline text-[17px] font-bold text-[#06233f]",
  ul: "mb-5 list-disc space-y-2 pl-6 font-serif text-[17px] leading-7", ol: "mb-5 list-decimal space-y-2 pl-6 font-serif text-[17px] leading-7", li: "pl-1", a: "text-[#20627d] underline decoration-slate-300 underline-offset-2 hover:text-gold", blockquote: "my-6 border-l-2 border-gold pl-5 font-serif text-xl italic text-ink", figure: "my-5", figcaption: "mt-2 text-xs text-muted", img: "h-auto max-w-full", hr: "my-7 border-slate-200", br: "block", table: "my-5 w-full border-collapse text-sm", thead: "bg-slate-100", tbody: "", tr: "border-b", th: "p-2 text-left font-bold", td: "p-2"
};
const banco = { p: "mb-[1.32em] font-serif text-[19px] leading-[1.74] text-[#202830]", h2: "mb-[.68em] mt-[2.1em] border-t-[3px] border-[#c59a43] pt-[13px] font-headline text-[clamp(28px,3vw,34px)] font-bold leading-[1.08] tracking-[-.03em] text-[#06233f]", h3: "mb-3 mt-6 font-headline text-[25px] font-bold text-[#06233f]", section: "block", aside: "my-10 border-t-[3px] border-[#06233f] bg-gradient-to-br from-[#f5f7f9] to-[#fbfaf6] px-7 pb-[25px] pt-6", ul: "mb-5 list-disc space-y-2 pl-5 font-sans text-[15px] leading-[1.55]", li: "marker:text-[#c59a43]", blockquote: "my-8 border-l-4 border-[#c59a43] pl-6 font-serif text-[22px] italic leading-[1.55] text-[#06233f]" };
const britannia = { p: "mb-[.65em] font-serif text-[18px] leading-[1.68] text-[#2b3540]", h2: "mb-4 font-serif text-[44px] font-medium leading-[1.1] tracking-[-.03em] text-[#162b3a]", section: "border-t border-[#e8e4dc] py-[30px] first:border-0 first:pt-0", ul: "mb-5 list-disc space-y-2 pl-5 font-serif text-[16px]" };
const opinion = { p: "mb-[1.4em] font-serif text-[20px] leading-[1.74] text-[#1b2127] max-[640px]:text-[18.5px] max-[640px]:leading-[1.7]", figure: "m-0", figcaption: "mt-2 font-sans text-[12px] leading-[1.45] text-[#65717c]", img: "block h-auto w-full", blockquote: "my-12 border-l-[6px] border-[#c59a43] pl-7 font-serif text-[clamp(26px,3.2vw,34px)] not-italic leading-[1.22] tracking-[-.01em] text-[#0b0d10] max-[640px]:my-9 max-[640px]:pl-5" };
const policy = { p: "mb-[15px] font-sans text-[17px] leading-[1.6] text-[#444]", h1: "mb-[15px] font-headline text-[42px] font-bold leading-tight text-[#111820] max-[767px]:text-[32px]", h2: "mb-5 mt-6 font-headline text-[28px] font-bold text-[#111820] max-[767px]:text-[24px]", h3: "mb-[10px] mt-[25px] font-headline text-[20px] font-semibold text-[#222]", ul: "my-[15px] list-disc pl-[25px] font-sans text-[17px] leading-[1.5] text-[#444]", li: "mb-[10px] text-[17px] leading-[1.5] text-[#444]" };
const privacy = { p: "mb-[14px] font-sans text-[15.5px] leading-[1.85] text-[#333]", h1: "mb-6 font-headline text-[34px] font-medium leading-tight text-[#111820]", h2: "mb-[10px] mt-[30px] border-b border-[#e0e0e0] pb-[6px] font-sans text-[18px] font-bold text-[#111]", ul: "my-[18px] ml-6 list-disc pl-4 font-sans text-[15.5px] leading-[1.75] text-[#333]", li: "mb-[6px] text-[15.5px] leading-[1.75] text-[#333]", hr: "my-7 border-[#e0e0e0]" };

function custom(original, variant) {
  if (variant === "opinion") {
    if (original.includes("op-opening")) return "!text-[23px] !leading-[1.62] !text-[#0b0d10] max-[640px]:!text-[20px]";
    if (original.includes("op-turn")) return "!mb-3 mt-2 !text-[22px] !font-bold !leading-[1.4] !text-[#0b0d10]";
    if (original.includes("op-closing")) return "mt-12 border-t-[3px] border-[#0b0d10] pt-7 !text-[22px] !leading-[1.6] !text-[#0b0d10]";
    if (original.includes("op-portrait")) return "float-right clear-right mb-4 ml-7 mt-1.5 w-[210px] min-[1320px]:ml-0 min-[1320px]:w-[240px] min-[1320px]:-mr-[280px] max-[640px]:float-none max-[640px]:mx-auto max-[640px]:my-8 max-[640px]:w-[min(320px,84%)]";
  }
  if (original.includes("detail-content-text-section") && variant === "privacy") return "flex flex-col gap-[30px]";
  if (original.includes("article-key-takeaways")) return "my-10 border-t-[3px] border-[#06233f] bg-gradient-to-br from-[#f5f7f9] to-[#fbfaf6] px-7 pb-[25px] pt-6";
  if (original.includes("article-module-label")) return "mb-[7px] font-sans text-[11px] font-extrabold uppercase tracking-[.11em] text-[#c59a43]";
  if (original.includes("article-declaration")) return "my-7 border-l-4 border-[#c59a43] py-2 pl-5 font-serif text-[23px] leading-[1.48] text-[#06233f]";
  if (original.includes("article-insight")) return "my-8 border-y border-[#c59a43] bg-[#faf7ef] px-5 py-4 font-serif text-[22px] leading-[1.55] text-[#06233f]";
  if (original.includes("img-detail-grid")) return "my-8 grid grid-cols-3 gap-4";
  if (original.includes("inline-figure-grid")) return "my-8 grid grid-cols-2 gap-[18px]";
  if (original.includes("article-sources")) return "my-10 border-t-[3px] border-[#06233f] pt-[22px]";
  if (original.includes("bgm-dropcap")) return "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-none first-letter:text-[#b58b43] mb-3 font-serif text-[18px] leading-[1.55] text-[#2b3540]";
  if (original.includes("bgm-section__heading")) return "mb-3";
  if (original.includes("bgm-sources__list")) return "my-6 list-disc space-y-2 pl-5 font-serif font-bold";
  if (original.includes("closing-line")) return "my-8 border-l-4 border-[#c59a43] py-1 pl-6 font-serif text-[22px] italic leading-[1.55] text-[#06233f]";
  if (original.includes("about-brand-column")) return "rounded-sm bg-paper p-6";
  if (original.includes("about-split")) return "grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]";
  if (original.includes("privacy-list")) return "ml-6 list-disc pl-4 font-sans text-[15.5px] leading-[1.75] text-[#333]";
  if (original.includes("privacy-lead")) return "my-[18px] border-l-[3px] border-[#b8860b] bg-[#fafafa] px-[18px] py-3 font-sans text-[16.8px] leading-[1.8] text-[#444]";
  if (original.includes("privacy-section-title")) return "mb-[10px] mt-[30px] border-b border-[#e0e0e0] pb-[6px] font-sans text-[18px] font-bold text-[#111]";
  if (original.includes("privacy-body")) return "mb-[14px] font-sans text-[15.5px] leading-[1.85] text-[#333]";
  if (original.includes("privacy-last-updated")) return "mt-6 inline-block rounded border border-[#e0e0e0] bg-[#f3f3f3] px-3 py-[5px] font-sans text-[13px] tracking-[.02em] text-[#888]";
  if (original.includes("policy-header") || original.includes("contact-hero")) return "mb-10 mt-[28px] pb-3 text-center";
  if (original.includes("policy-section") || original.includes("contact-section")) return "border-b border-[#e0e0e0] bg-white py-[35px] last:border-b-0";
  if (original.includes("contact-address")) return "mt-5 rounded-lg bg-[#f8f9fa] p-[25px]";
  if (original.includes("update-date")) return "mt-10 border-t border-[#eee] pt-5 text-right text-[13px] text-[#aaa]";
  if (original.includes("note")) return "mt-[10px] font-sans text-[15px] italic text-[#777]";
  return "";
}

export default function RichContent({ nodes, variant = "default" }) {
  const theme = variant === "banco" ? banco : variant === "britannia" ? britannia : variant === "policy" ? policy : variant === "privacy" ? privacy : variant === "opinion" ? opinion : {};
  function render(node, key, parentClass = "", isLast = false) {
    if (typeof node === "string") return node;
    const Tag = node.tag;
    if (!base[Tag]) return null;
    const attrs = node.attrs || {};
    const closingQuote = variant === "britannia" && Tag === "p" && parentClass.includes("bgm-section--closing") && isLast ? "my-5 border-l-2 border-gold bg-[#142b3b] px-8 py-8 font-serif text-[21px] italic leading-[1.65] text-white shadow-lg" : "";
    const takeawaysHeading = variant === "banco" && Tag === "h2" && parentClass.includes("article-key-takeaways") ? "mb-[14px] font-headline text-[25px] font-bold leading-[1.12] tracking-[-.025em] text-[#06233f]" : "";
    const takeawaysList = variant === "banco" && Tag === "ul" && parentClass.includes("article-key-takeaways") ? "m-0 grid list-none gap-[10px] p-0 font-sans text-[15px] leading-[1.55]" : "";
    const takeawaysItem = variant === "banco" && Tag === "li" && parentClass.includes("article-key-takeaways") ? "relative pl-5 font-sans text-[15px] leading-[1.55] text-[#2c3742] before:absolute before:left-0 before:top-[.62em] before:h-[7px] before:w-[7px] before:rotate-45 before:bg-[#c59a43]" : "";
    const policyHeaderText = variant === "policy" && (parentClass.includes("policy-header") || parentClass.includes("contact-hero")) && Tag === "p" ? "mx-auto max-w-[700px] font-sans text-[18px] leading-[1.5] text-[#555]" : "";
    const className = [closingQuote || takeawaysHeading || takeawaysList || takeawaysItem || policyHeaderText || theme[Tag] || base[Tag], custom(attrs.class || "", variant)].filter(Boolean).join(" ");
    const props = { className };
    if (attrs.id) props.id = attrs.id;
    if (attrs.title) props.title = attrs.title;
    if (attrs.href) props.href = attrs.href;
    if (attrs.src) { props.src = attrs.src; props.alt = attrs.alt || ""; props.loading = "lazy"; }
    if (attrs.datetime) props.dateTime = attrs.datetime;
    if (attrs.target === "_blank") { props.target = "_blank"; props.rel = "noopener noreferrer"; }
    if (Tag === "img" || Tag === "hr" || Tag === "br") return <Tag key={key} {...props} />;
    return <Tag key={key} {...props}>{(node.children || []).map((child, index, all) => render(child, index, attrs.class || "", index === all.length - 1))}</Tag>;
  }
  return <>{(nodes || []).map((node, index) => render(node, index))}</>;
}
