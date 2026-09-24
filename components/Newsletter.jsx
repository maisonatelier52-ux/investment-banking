"use client";
import { useEffect, useState } from "react";

export default function Newsletter() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("success") === "true") {
      setSuccess(true);
      url.searchParams.delete("success");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      const timeout = window.setTimeout(() => setSuccess(false), 4000);
      return () => window.clearTimeout(timeout);
    }
  }, []);
  return <section id="newsletter" className="mx-auto my-[38px] flex w-[calc(100%-48px)] max-w-[1200px] flex-col items-start border-t-4 border-[#c59a43] bg-[#06233f] px-10 py-[34px] text-left text-white max-[767px]:w-[calc(100%-32px)] max-[767px]:px-6"><h2 className="mb-[22px] max-w-[700px] font-headline text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-.02em]">NEWSLETTER</h2><form action="https://formsubmit.co/admin@investment-banking.org" method="POST" className="flex w-full flex-wrap items-stretch justify-start gap-3"><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_next" value="https://www.investment-banking.org/?success=true"/><input name="name" type="text" required autoComplete="name" aria-label="Your name" placeholder="Your name" className="min-w-0 flex-1 rounded-[2px] border border-[#8d99a7] bg-white px-4 py-[14px] text-sm text-[#111820] max-[767px]:w-full max-[767px]:flex-none"/><input name="email" type="email" required autoComplete="email" aria-label="Your email address" placeholder="Your email address" className="min-w-0 flex-1 rounded-[2px] border border-[#8d99a7] bg-white px-4 py-[14px] text-sm text-[#111820] max-[767px]:w-full max-[767px]:flex-none"/><button type="submit" className="rounded-[2px] bg-[#c59a43] px-[26px] py-[15px] text-sm font-bold text-[#06233f] hover:bg-[#d5af61] max-[767px]:w-full">Sign up</button></form>{success && <p role="status" className="fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded bg-[#013e84] px-5 py-4 text-sm text-white shadow-lg">Thanks—your newsletter request has been sent.</p>}</section>;
}
