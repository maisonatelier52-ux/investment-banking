import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["editorial-policy"].metaTitle || pages["editorial-policy"].title, description: pages["editorial-policy"].description, alternates: { canonical: "/editorial-policy" } };
export default function Page() { return <InformationPage pageKey="editorial-policy" />; }
