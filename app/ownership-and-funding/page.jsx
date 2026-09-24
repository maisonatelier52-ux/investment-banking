import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["ownership-and-funding"].metaTitle || pages["ownership-and-funding"].title, description: pages["ownership-and-funding"].description, alternates: { canonical: "/ownership-and-funding" } };
export default function Page() { return <InformationPage pageKey="ownership-and-funding" />; }
