import InformationPage from "@/components/InformationPage";
import pages from "@/data/pages.json";
export const metadata = { title: pages["legal"].metaTitle || pages["legal"].title, description: pages["legal"].description, alternates: { canonical: "/legal" } };
export default function Page() { return <InformationPage pageKey="legal" />; }
