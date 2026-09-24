import RichContent from "@/components/RichContent";
import pages from "@/data/pages.json";

export default function InformationPage({ pageKey }) {
  const page = pages[pageKey];
  const isPrivacy = pageKey === "privacy-policy";
  const isAbout = pageKey === "about" || pageKey === "about-us";
  return <main id="main-content" className={isAbout ? "mx-auto min-h-[55vh] max-w-[1200px] px-5 py-10" : isPrivacy ? "mx-auto min-h-[55vh] max-w-[780px] px-5 pb-[87px] pt-10" : "mx-auto min-h-[55vh] max-w-[900px] px-5 py-10"}><article className={isPrivacy ? "flex w-full flex-col gap-[30px]" : "w-full"}><RichContent nodes={page.content} variant={isPrivacy ? "privacy" : isAbout ? "about" : "policy"} /></article></main>;
}
