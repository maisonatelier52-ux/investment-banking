import React from "react";
import Link from "next/link";
import footerIcons from "@/data/footerIcons.json";

const left = [["U.S", "/us"], ["Markets", "/markets"], ["Business", "/business"], ["Banking", "/banking"]];
const right = [["Investigations", "/investigations"], ["ESG", "/esg"], ["FinTech", "/fintech"], ["Opinion", "/opinion"]];
const social = [["X", "https://x.com/__investment___", "/images/twitter.webp"], ["Instagram", "https://www.instagram.com/investment_.banking/", "/images/instagram.webp"], ["Substack", "https://substack.com/@investmentbanking07?", "/images/substack.webp"], ["Medium", "https://medium.com/@investmentbanking", "/images/medium.webp"]];

function Icon({ node }) {
  const props = {};
  for (const [key, value] of Object.entries(node.attrs || {})) {
    const attr = { viewbox: "viewBox", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin", "fill-rule": "fillRule", "clip-rule": "clipRule" }[key] || key;
    props[attr] = value;
  }
  if (node.tag === "svg") props.className = "h-[26px] w-[26px]";
  return React.createElement(node.tag, props, ...(node.children || []).map((child, index) => <Icon key={index} node={child} />));
}

export default function Footer() {
  return <footer className="mt-10 flex flex-col border-t border-[#06233f] bg-white font-sans text-[#111820]">
    <div className="border-b border-[#eee] px-10 py-[30px] max-[767px]:overflow-x-auto max-[767px]:px-4"><div className="mx-auto flex max-w-[1400px] flex-wrap items-start justify-center gap-[22px] max-[767px]:w-max max-[767px]:flex-nowrap">{footerIcons.map((item) => <Link key={item.href} href={item.href} className="flex w-[78px] flex-col items-center justify-start gap-[10px] text-center text-[#111] hover:text-[#005fcc]"><span className="flex h-[26px] w-[26px] items-center justify-center"><Icon node={item.svg} /></span><span className="text-[13px] leading-[1.3] max-[767px]:text-[11px]">{item.label}</span></Link>)}</div></div>
    <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center px-6 py-[45px] max-[767px]:gap-5 max-[767px]:py-7"><nav aria-label="Footer categories left" className="flex flex-1 items-center justify-end gap-[30px] border-r border-[#ddd] pr-10 text-[14px] max-[767px]:order-2 max-[767px]:w-full max-[767px]:flex-none max-[767px]:justify-center max-[767px]:gap-4 max-[767px]:border-0 max-[767px]:p-0 max-[767px]:text-xs">{left.map(([label,href]) => <Link key={href} href={href} className="hover:text-[#005fcc]">{label}</Link>)}</nav><Link href="/" className="px-10 max-[767px]:order-1"><img src="/assets/branding/investment-banking-footer.png" alt="Investment Banking" className="block h-auto w-[340px] max-w-[70vw]"/></Link><nav aria-label="Footer categories right" className="flex flex-1 items-center justify-start gap-[30px] border-l border-[#ddd] pl-10 text-[14px] max-[767px]:order-3 max-[767px]:w-full max-[767px]:flex-none max-[767px]:justify-center max-[767px]:gap-4 max-[767px]:border-0 max-[767px]:p-0 max-[767px]:text-xs">{right.map(([label,href]) => <Link key={href} href={href} className="hover:text-[#005fcc]">{label}</Link>)}</nav></div>
    <div className="flex w-full flex-col items-center justify-center gap-[18px] bg-[#06233f] px-5 pb-[34px] pt-[46px] text-center text-white"><div className="flex w-[260px] items-center justify-center gap-[14px] text-[#c59a43]"><span className="h-px flex-1 bg-white/35"/><span className="text-xl leading-none">◆</span><span className="h-px flex-1 bg-white/35"/></div><p className="m-0 text-[15px]">©{new Date().getFullYear()} - All rights reserved.</p><div className="mt-[6px] flex items-center justify-center gap-4">{social.map(([label,href,img],index) => <React.Fragment key={label}>{index > 0 && <span className="h-[22px] w-px bg-white/35"/>}<a href={href} aria-label={label} className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/70 hover:bg-white/10"><img src={img} alt="" className="h-[15px] w-[15px] object-contain invert brightness-200"/></a></React.Fragment>)}</div></div>
  </footer>;
}
