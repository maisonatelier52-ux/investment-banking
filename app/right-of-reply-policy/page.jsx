import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["right-of-reply-policy"].metaTitle || pages["right-of-reply-policy"].title, description: pages["right-of-reply-policy"].description, alternates: { canonical: "/right-of-reply-policy" } };
export default function Page() { return <InformationPage pageKey="right-of-reply-policy" />; }
