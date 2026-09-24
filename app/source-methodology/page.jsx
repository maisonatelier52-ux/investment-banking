import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["source-methodology"].metaTitle || pages["source-methodology"].title, description: pages["source-methodology"].description, alternates: { canonical: "/source-methodology" } };
export default function Page() { return <InformationPage pageKey="source-methodology" />; }
